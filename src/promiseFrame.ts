type FunctionType<T> = () => Promise<T> | T;

type FunctionResultsUnion<
  T extends FunctionType<any>[] | Readonly<FunctionType<any>[]>
> = {
  [K in keyof T]: Awaited<ReturnType<T[K]>>;
}[number];

const promiseFrame = async <
  T extends FunctionType<any>[] | Readonly<FunctionType<any>[]>,
  ResultsT = FunctionResultsUnion<T>
>(
  functions: T,
  limit?: number
): Promise<ResultsT[]> => {
  // 1. Проверка, что первый аргумент - массив
  if (!Array.isArray(functions)) {
    throw new Error('INVALID_ARGUMENT');
  }

  // 2. Проверка, что второй аргумент, если передан, является числом больше 0
  if (limit !== undefined) {
    if (typeof limit !== 'number' || limit <= 0) {
      throw new Error('INVALID_ARGUMENT');
    }
  }

  // Если лимита нет, просто выполняем все промисы параллельно
  if (limit === undefined) {
    return Promise.all(functions.map(fn => Promise.resolve().then(fn)));
  }

  // 3. Логика для выполнения с ограничением по лимиту
  const results: ResultsT[] = new Array(functions.length); // Массив для сохранения результатов
  let activePromises = 0; // Текущий счетчик активных промисов
  let currentIndex = 0; // Индекс следующей функции для выполнения

  return new Promise<ResultsT[]>((resolve, reject) => {
    const executeNext = () => {
      // Если все функции выполнены и активных промисов больше нет, завершаем
      if (currentIndex >= functions.length && activePromises === 0) {
        return resolve(results);
      }

      // Пока есть место для выполнения новых промисов
      while (activePromises < limit && currentIndex < functions.length) {
        const index = currentIndex;
        const fn = functions[currentIndex];
        currentIndex++;
        activePromises++;

        // Выполняем функцию, обрабатываем результат и уменьшаем количество активных промисов
        Promise.resolve()
          .then(fn)
          .then(result => {
            results[index] = result;
          })
          .catch(reject) // В случае ошибки сразу прерываем выполнение
          .finally(() => {
            activePromises--;
            executeNext(); // После завершения одного промиса запускаем следующий
          });
      }
    };

    // Запускаем первые задачи
    executeNext();
  });
};

export default promiseFrame;

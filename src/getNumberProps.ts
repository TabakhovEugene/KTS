const getNumberProps = (obj: any): string[] => {
    // Проверка типа аргумента
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        throw new Error('INVALID_ARGUMENT');
    }

    // Рекурсивная функция для обхода объекта
    const findNumberProps = (currentObj: any, result: string[]): void => {
        for (const key in currentObj) {
            if (currentObj.hasOwnProperty(key)) {
                if (typeof currentObj[key] === 'number') {
                    result.push(key);
                } else if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
                    findNumberProps(currentObj[key], result);
                }
            }
        }
    };

    const result: string[] = [];
    findNumberProps(obj, result);

    // Сортировка результата
    result.sort();

    return result;
};

export default getNumberProps;

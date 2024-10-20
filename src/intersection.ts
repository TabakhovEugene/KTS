const intersection = (...args: any[]): number[] => {
    // Проверка количества аргументов
    if (args.length !== 2) {
        throw new Error('INVALID_ARGUMENTS_COUNT');
    }

    const [array1, array2] = args;

    // Проверка типов аргументов
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error('INVALID_ARGUMENT');
    }

    // Проверка типов элементов массивов
    for (const elem of array1) {
        if (typeof elem !== 'number') {
            throw new Error('INVALID_ELEMENT_IN_ARRAY');
        }
    }

    for (const elem of array2) {
        if (typeof elem !== 'number') {
            throw new Error('INVALID_ELEMENT_IN_ARRAY');
        }
    }

    // Найти пересечение массивов
    const result: number[] = [];
    const set = new Set(array2);

    for (const elem of array1) {
        if (set.has(elem) && !result.includes(elem)) {
            result.push(elem);
        }
    }

    return result;
};

export default intersection;
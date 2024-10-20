const multiply = (factor: any) => {
    // Проверка типа аргумента в основной функции
    if (typeof factor !== 'number') {
        throw new Error('INVALID_ARGUMENT');
    }

    return (value: any): number => {
        // Проверка типа аргумента в возвращаемой функции
        if (typeof value !== 'number') {
            throw new Error('INVALID_ARGUMENT');
        }

        return factor * value;
    };
};

export default multiply;

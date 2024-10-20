const planEvent = (cb: any, timeout: any): Promise<any> => {
    // Проверка типа первого аргумента
    if (typeof cb !== 'function') {
        return Promise.reject(new Error('INVALID_ARGUMENT'));
    }

    // Проверка типа второго аргумента
    if (typeof timeout !== 'number') {
        return Promise.reject(new Error('INVALID_ARGUMENT'));
    }

    return new Promise((resolve, reject) => {
        if (timeout <= 0) {
            try {
                const result = cb();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        } else {
            setTimeout(() => {
                try {
                    const result = cb();
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            }, timeout);
        }
    });
};

export default planEvent;

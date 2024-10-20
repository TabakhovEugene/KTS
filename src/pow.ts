// const pow = (base: number, exponent?: number): number | ((exponent: number) => number) => {
//   if (base !== undefined && typeof base !== 'number') {
//     throw new Error('INVALID_ARGUMENT');
//   }
//
//   return (exponent?: number): number => {
//     if (base === undefined) {
//       if (typeof exponent !== 'number') {
//         throw new Error('INVALID_ARGUMENT');
//       }
//       return exponent;
//     }
//
//     if (exponent === undefined) {
//       return base;
//     }
//
//     if (typeof exponent !== 'number') {
//       throw new Error('INVALID_ARGUMENT');
//     }
//
//     return Math.pow(base, exponent);
//   };
// };

const pow = (base: number, exponent?: number): number | ((exponent: number) => number) => {
    // Проверяем, что base является числом
    if (typeof base !== 'number') {
        throw new Error('INVALID_ARGUMENT');
    }
    if (exponent !== undefined && typeof exponent !== 'number') {
        throw new Error('INVALID_ARGUMENT');
    }

    // Если exponent передан и это число, возвращаем результат
    if (exponent !== undefined && typeof exponent === 'number') {
        return Math.pow(base, exponent);
    }

    // Возвращаем функцию, если exponent не передан
    return (exponent: number): number => {
        // Проверяем, что exponent является числом
        if (typeof exponent !== 'number') {
            throw new Error('INVALID_ARGUMENT');
        }
        return Math.pow(base, exponent);
    };
};

export default pow;

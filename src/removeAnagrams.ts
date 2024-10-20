const removeAnagrams = (input: any): string[] => {
    // Проверка типа аргумента
    if (!Array.isArray(input)) {
        throw new Error('INVALID_ARGUMENT');
    }

    // Проверка типов элементов массива
    for (const elem of input) {
        if (typeof elem !== 'string') {
            throw new Error('INVALID_ELEMENT_IN_ARRAY');
        }
    }

    // Удаление анаграмм из массива
    const result: string[] = [];
    const seen: Set<string> = new Set();
    const anagrams: Set<string> = new Set();

    for (const str of input) {
        const sortedStr = str.split('').sort().join('');
        if (seen.has(sortedStr)) {
            anagrams.add(sortedStr);
        } else {
            seen.add(sortedStr);
        }
    }

    for (const str of input) {
        const sortedStr = str.split('').sort().join('');
        if (!anagrams.has(sortedStr)) {
            result.push(str);
        }
    }

    return result;
};

export default removeAnagrams;

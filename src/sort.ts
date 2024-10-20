const sort = (input: any): string => {
    // Проверка типа аргумента
    if (typeof input !== 'string') {
        throw new Error('INVALID_ARGUMENT');
    }

    // Разделить строку на слова
    const words = input.split(' ');

    // Отсортировать буквы в каждом слове и привести их к нижнему регистру
    const sortedWords = words.map(word => {
        return word.toLowerCase().split('').sort().join('');
    });

    // Отсортировать слова по количеству букв
    sortedWords.sort((a, b) => a.length - b.length);

    // Объединить слова обратно в строку
    return sortedWords.join(' ');
};

export default sort;

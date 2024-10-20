const dfs = (graph: any): string[] => {
    // Проверка типа аргумента
    if (typeof graph !== 'object' || graph === null || Array.isArray(graph)) {
        throw new Error('INVALID_ARGUMENT');
    }

    // Рекурсивная функция для обхода в глубину
    const dfsRecursive = (node: string, visited: Set<string>, result: string[]): void => {
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            for (const neighbor of graph[node]) {
                dfsRecursive(neighbor, visited, result);
            }
        }
    };

    const result: string[] = [];
    const visited: Set<string> = new Set();

    // Начинаем обход с корневого узла (предполагается, что корневой узел - первый ключ в объекте)
    const rootNode = Object.keys(graph)[0];
    dfsRecursive(rootNode, visited, result);

    return result;
};

export default dfs;

const bfs = (graph: any): string[] => {
    // Проверка типа аргумента
    if (typeof graph !== 'object' || graph === null || Array.isArray(graph)) {
        throw new Error('INVALID_ARGUMENT');
    }

    // Функция для обхода в ширину
    const bfsTraversal = (startNode: string): string[] => {
        const result: string[] = [];
        const queue: string[] = [startNode];
        const visited: Set<string> = new Set();

        while (queue.length > 0) {
            const currentNode = queue.shift()!;
            if (!visited.has(currentNode)) {
                visited.add(currentNode);
                result.push(currentNode);
                for (const neighbor of graph[currentNode]) {
                    queue.push(neighbor);
                }
            }
        }

        return result;
    };

    // Начинаем обход с корневого узла (предполагается, что корневой узел - первый ключ в объекте)
    const rootNode = Object.keys(graph)[0];
    return bfsTraversal(rootNode);
};

export default bfs;

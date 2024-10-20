// @ts-nocheck

const patchArrays = (): void => {
    // Метод count возвращает длину массива
    Array.prototype.count = function(): number {
        return this.length;
    };

    // Метод insert осуществляет вставку элемента в массив по индексу
    Array.prototype.insert = function(index: number, element: any): any[] {
        if (typeof index !== 'number') {
            throw new Error('INVALID_ARGUMENT');
        }

        if (index < 0) {
            this.unshift(element);
        } else if (index >= this.length) {
            this.push(element);
        } else {
            this.splice(index, 0, element);
        }

        return this;
    };

    // Метод remove удаляет из массива первый встречающийся элемент с таким значением
    Array.prototype.remove = function(element: any): any[] {
        const index = this.indexOf(element);
        if (index !== -1) {
            this.splice(index, 1);
        }
        return this;
    };
};

export default patchArrays;

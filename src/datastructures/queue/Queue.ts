/*
 * @Author: hucheng
 * @Date: 2020-05-17 18:26:40
 * @Description: 先进先出
 */
class Queue<T> {
    private items: T[] = [];
    isEmpty () {
        return this.items.length === 0;
    }

    enqueue (ele: T) {
        this.items.push(ele);
    }

    dequeue (): T {
        return this.items.shift();
    }

    size () {
        return this.items.length;
    }

    clear () {
        this.items = [];
    }

    [Symbol.iterator] () {
        let pointer = 0;
        const components = this.items;

        return {
            next (): IteratorResult<T> {
                if (pointer < components.length) {
                    return {
                        done: false,
                        value: components[pointer++]
                    };
                } else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        };
    }
}

export default Queue;

/*
 * @Author: hucheng
 * @Date: 2020-05-17 18:26:40
 * @Description: 先进先出
 */
class Queue<T> {
    private items: T[];
    isEmpty () {
        return this.items.length === 0;
    }

    enqueue (ele: T) {
        this.items.push(ele);
    }

    dequeue () {
        this.items.unshift();
    }

    size () {
        return this.items.length;
    }

    clear () {
        this.items = [];
    }
}

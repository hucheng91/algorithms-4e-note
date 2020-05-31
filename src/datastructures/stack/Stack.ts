/*
 * @Author: hucheng
 * @Date: 2020-05-17 18:15:45
 * @Description: 栈是后进先出，叠盘子
 */
class Stack<T> {
    private items: T[] = [];
    isEmpty () {
        return this.items.length === 0;
    }

    push (ele: T): void {
        this.items.push(ele);
    }

    pop (): T {
        return this.items.pop();
    }

    size (): number {
        return this.items.length;
    }

    peek (): T {
        return this.items[this.size() - 1];
    }

    clear (): void {
        this.items = [];
    }
}
export default Stack;

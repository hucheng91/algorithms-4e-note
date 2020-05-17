/*
 * @Author: hucheng
 * @Date: 2020-05-17 18:15:45
 * @Description: 栈是后进先出，叠盘子
 */
class Stack<T> {
    private items: T[];
    isEmpty () {
        return this.items.length === 0;
    }

    push (ele: T) {
        this.items.push(ele);
    }

    pop () {
        this.items.pop();
    }

    size () {
        return this.items.length;
    }

    clear () {
        this.items = [];
    }
}

/*
 * @Author: hucheng
 * @Date: 2020-05-17 18:32:15
 * @Description: here is des
 */

// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
import Stack from './Stack';

class MinStack<T> {
    private dataStacK: Stack<T>;
    private minStack: Stack<T>;

    constructor () {
        this.dataStacK = new Stack<T>();
        this.minStack = new Stack<T>();
    }

    push (node: T) {
        this.dataStacK.push(node);
        if (this.minStack.size() === 0 || node < this.min()) {
            this.minStack.push(node);
        } else {
            this.minStack.push(this.min());
        }
    }

    min (): T {
        return this.minStack.pop();
    }
}

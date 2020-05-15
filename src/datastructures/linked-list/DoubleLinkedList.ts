/*
 * @Author: hucheng
 * @Date: 2020-01-03 07:50:52
 * @Description: here is des
 */
import LinkList from './LinkedList';
class DoubleLinkedNode<T> {
    data: T;
    pre: DoubleLinkedNode<T>;
    next: DoubleLinkedNode<T>;
    constructor (data) {
        this.data = data;
        this.pre = null;
        this.next = null;
    }
}
class DoubleLinkedList<T> extends LinkList<T> {
    length: number;
    head: DoubleLinkedNode<T>;
    tail: DoubleLinkedNode<T>;
    constructor () {
        super();
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    getEleAt (position: number) {
        if (position < Math.floor(this.length / 2)) {
            return super.getEleAt(position);
        }

        let current = this.tail;
        for (let i = this.length - 1; i > position; i--) {
            current = current.pre;
        }
        return current;
    }

    append (ele: T): DoubleLinkedNode<T> {
        const node = new DoubleLinkedNode<T>(ele);
        const _fn = {
            frist: () => {
                this.head = node;
                this.tail = node;
            },
            append: () => {
                this.tail.next = node;
                node.pre = this.tail;
                this.tail = node;
            }
        };
        if (this.head === null) {
            _fn.frist();
        } else {
            _fn.append();
        }

        return node;
    }

    insert (ele: T, position: number) {
        if (this._isOutOfIndex(position)) {
            return null;
        }
        const node = new DoubleLinkedNode<T>(ele);
        const _fn = {
            head: () => {
                this.head.pre = node;
                node.next = this.head;
                this.head = node;
            },
            tail: () => {},
            other: () => {}
        };
    }
}
export default DoubleLinkedList;
export { DoubleLinkedList, DoubleLinkedNode };

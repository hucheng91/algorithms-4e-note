/*
 * @Author: hucheng
 * @Date: 2020-01-03 07:50:52
 * @Description: here is des
 */
class DoublyLinkedNode<T> {
    data: T;
    pre: DoublyLinkedNode<T>;
    next: DoublyLinkedNode<T>;
    constructor (data: T) {
        this.data = data;
        this.pre = null;
        this.next = null;
    }
}
class DoublyLinkedList<T> {
    length: number;
    head: DoublyLinkedNode<T>;
    tail: DoublyLinkedNode<T>;
    constructor () {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    _isOutOfIndex (position) {
        if (position === undefined || position === null || position < 0 || position > this.length) {
            return true;
        }
        return false;
    }

    getEleAtByPre (position: number) {
        if (this._isOutOfIndex(position)) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }

    getEleAt (position: number) {
        if (position < Math.floor(this.length / 2)) {
            return this.getEleAtByPre(position);
        }

        let current = this.tail;
        for (let i = this.length - 1; i > position; i--) {
            current = current.pre;
        }
        return current;
    }

    append (ele: T): DoublyLinkedList<T> {
        const node = new DoublyLinkedNode<T>(ele);
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
        this.length++;
        return this;
    }

    prepend (ele: T): DoublyLinkedList<T> {
        const node = new DoublyLinkedNode<T>(ele);
        const _fn = {
            frist: () => {
                this.head = node;
                this.tail = node;
            },
            prepend: () => {
                this.head.pre = node;
                node.next = this.head;
                this.head = node;
            }
        };
        if (this.head === null) {
            _fn.frist();
        } else {
            _fn.prepend();
        }
        this.length++;
        return this;
    }

    insert (ele: T, position: number): boolean | null | DoublyLinkedList<T> {
        if (this._isOutOfIndex(position)) {
            return null;
        }
        if (!this.head || position === 0) {
            return this.prepend(ele);
        }
        if (position === this.length) {
            return this.append(ele);
        }

        const node = new DoublyLinkedNode<T>(ele);
        const previous = this.getEleAt(position);

        const current = previous.next;
        previous.next = node;
        node.pre = previous;
        node.next = current;

        this.length++;

        return this;
    }

    removeAt (position: number) {
        if (this._isOutOfIndex(position) || !this.head) {
            return null;
        }
        let result;
        if (position === 0) {
            const current = this.head.next;
            current.pre = null;
            this.head = current;
            this.length--;
            return current.data;
        }

        if (position === this.length) {
            const current = this.tail.pre;
            current.next = null;
            this.tail = current;
            this.length--;
            return current.data;
        }

        const current = this.getEleAt(position);
        const nexNode = current.next;
        const preNode = current.pre;
        preNode.next = nexNode;
        nexNode.pre = preNode;

        this.length--;

        return result;
    }
}
export default DoublyLinkedList;
export { DoublyLinkedList, DoublyLinkedNode };

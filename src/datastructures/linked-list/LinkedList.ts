// @ts-ignore

class LinkedNode<T> {
    data: T;
    next: LinkedNode<T>;
    constructor (data: T) {
        this.data = data; // 当前节点
        this.next = null; // 下一个元素
    }
}

class LinkedList<T> {
    length: number;
    head: LinkedNode<T>;
    constructor () {
        this.length = 0;
        this.head = null;
    }

    protected _isOutOfIndex (position) {
        if (position === undefined || position === null || position < 0 || position > this.length) {
            return true;
        }
        return false;
    }

    getEleAt (position: number) {
        if (this._isOutOfIndex(position)) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }

    append (ele: T): LinkedList<T> {
        const node = new LinkedNode<T>(ele);
        const _fn = {
            frist: () => {
                this.head = node;
                this.length++;
                return node;
            },
            append: () => {
                const lastEle = this.getEleAt(this.length - 1);
                lastEle.next = node;
                this.length++;
                return node;
            }
        };
        if (this.head == null) {
            _fn.frist();
        } else {
            _fn.append();
        }
        return this;
    }

    insert (ele: T, position: number) {
        if (this._isOutOfIndex(position)) {
            return null;
        }
        // @ts-ignore
        const node = new LinkedNode<T>(ele);
        const _fn = {
            frist: () => {
                node.next = this.head;
                this.head = node;
            },
            other: () => {
                const pre = this.getEleAt(position - 1);
                node.next = pre.next;
                pre.next = node;
            }
        };
        if (position === 0) {
            _fn.frist();
        } else {
            _fn.other();
        }
        this.length++;
        return true;
    }

    indexOf (ele) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.data === ele) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    removeAt (position: number): T {
        if (this._isOutOfIndex(position)) {
            return null;
        }

        let currentNode;
        if (position === 0) {
            currentNode = this.head.next;
            this.head = currentNode;
        } else {
            const preNode = this.getEleAt(position - 1);
            currentNode = preNode.next;
            preNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.data;
    }
}
export default LinkedList;
export { LinkedList, LinkedNode };

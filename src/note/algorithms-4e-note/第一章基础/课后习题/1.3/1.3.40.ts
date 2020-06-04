/*
 * @Author: hucheng
 * @Date: 2020-06-04 08:19:40
 * @Description: here is des
 */

import { LinkedNode } from '../../../../../datastructures/linked-list/LinkedList'

// 前移编码

class MoveToFrontParam {
    key: any;
    value: any
}
class MoveToFront {
    private first: LinkedNode<MoveToFrontParam>
    private size: number = 0
    private keyMap = new Map();

    isEmpty (): boolean {
        return this.size === 0
    }

    insert (key: any, value: any) {
        if (this.keyMap.has(key)) {
            this.delete(key)
        }
        const oldFirst = this.first || null
        const first = new LinkedNode({
            key,
            value
        })
        first.next = oldFirst
        this.size++
        this.keyMap.set(key, true)
    }

    get (key: any) {
        if (this.isEmpty() || !this.keyMap.has(key)) {
            return null
        }

        return this.delete(key)
    }

    delete (key: any) {
        if (this.isEmpty()) {
            return;
        }
        let current = this.first

        while (current) {
            if (current.data.key === key) {
                if (current.next) {
                    current.next = current.next.next
                } else {
                    current.next = null
                }
            }
            current = current.next
        }
        this.keyMap.delete(key)
        this.size--
        return current.data
    }
}

class MoveToFront2 {
    private size: number = 0
    private keyMap = new Map();

    isEmpty (): boolean {
        return this.size === 0
    }

    insert (key: any, value: any) {
        if (this.keyMap.has(key)) {
            this.delete(key)
        }
        this.keyMap.set(key, value)
        this.size++
    }

    delete (key: any) {
        if (this.isEmpty()) {
            return;
        }

        this.keyMap.delete(key)
        this.size--
    }
}

/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import { DoublyLinkedNode } from '../../../../../datastructures/linked-list/DoublyLinkedList'

class Steque<T> {
    private first: DoublyLinkedNode<T>
    private last: DoublyLinkedNode<T>
    private size: number = 0

    public push (data: T): void {
        const oldFirst = this.first
        const first = new DoublyLinkedNode(data)
        first.next = oldFirst

        if (oldFirst) {
            oldFirst.pre = first
        } else {
            this.last = first
        }
        this.size++
    }

    public pop (data: T): T {
        const sececendNode = this.first.next
        const result = this.first.data
        this.first = sececendNode
        if (this.first) {
            this.first.pre = null
        } else {
            this.last = null
        }
        this.size--
        return result
    }

    public equeue (data: T): void {
        const oldLast = this.last
        const last = new DoublyLinkedNode(data)
        last.pre = oldLast

        if (oldLast !== null) {
            oldLast.next = last
        } else {
            this.first = last
        }

        this.size++
    }
}

/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import { LinkedNode } from '../../../../../datastructures/linked-list/LinkedList'

// 用环形链表实现Queue，只要链表为非空，last.next 值为first
class Queue<T> {
    last: LinkedNode<T>
    size: number = 0

    isEmpty () {
        return this.size === 0
    }

    public enqueue (value: T): void {
        const node = new LinkedNode(value)
        node.data = value
        if (this.isEmpty()) {
            this.last = node
            this.last.next = node
        } else {
            const currentLastNode = this.last
            const firstNode = currentLastNode.next
            node.next = firstNode
            currentLastNode.next = node
            this.last = node
        }

        this.size++
    }

    public dequeue (): LinkedNode<T> {
        if (this.isEmpty()) {
            return null
        }
        if (this.size === 1) {
            const result = this.last.next
            this.last = null
            return result
        }
        const result = this.last.next;
        this.last.next = this.last.next.next
        return result
    }
}

function test () {
    const queue = new Queue<number>()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    const result: LinkedNode<number> = queue.dequeue()
    console.log(result)
    console.log(queue)
}
test()

/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import LinkedList, { LinkedNode } from '../../../../../datastructures/linked-list/LinkedList'

// 反转链表

function getData () {
    const linkedList = new LinkedList<number>()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(4)
    // linkedList.append(5)
    // linkedList.append(6)
    // linkedList.append(7)
    // linkedList.append(8)
    return linkedList
}
function test1 () {
    const linkedList = getData()
    const head = linkedList.head
    let currentNode = null
    let resverseNode = head
    // eslint-disable-next-line no-unmodified-loop-condition
    while (head && head.next) {
        currentNode = head.next
        head.next = currentNode.next
        currentNode.next = resverseNode
        resverseNode = currentNode
    }
}
function test2 () {
    const linkedList = getData()
    let first = linkedList.head
    let reverse = null
    while (first) {
        const second = first.next
        first.next = reverse
        reverse = first
        first = second
    }
}
function test3 () {
    const linkedList = getData()
    const first = linkedList.head

    const resverseNode = (first: LinkedNode<number>): LinkedNode<number> => {
        if (!first.next) {
            return first
        }
        const second = first.next
        const reverse = resverseNode(second)
        second.next = first
        first.next = null
        return reverse
    }
    resverseNode(first)
}

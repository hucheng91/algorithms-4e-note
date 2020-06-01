/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import LinkList, { LinkedNode } from '../../../../../datastructures/linked-list/LinkedList'
function insertAfter<T> (linkList: LinkList<T>, node: LinkedNode<T>, afterNode: LinkedNode<T>) {
    const head = linkList.head;
    let currentNode = linkList.head;
    const result = false
    // eslint-disable-next-line no-cond-assign
    if (linkList.length === 1 || node.data === head.data) {
        linkList.head.next = afterNode
    }

    while (currentNode) {
        if (node.data === currentNode.data) {
            const next = currentNode.next
            afterNode.next = next
            currentNode.next = afterNode
            break
        }
        currentNode = currentNode.next
    }
    console.log(JSON.stringify(linkList))
    return result
}

function test () {
    const linkList = new LinkList<number>()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append(3)
    const node = new LinkedNode<number>(1)
    const node2 = new LinkedNode<number>(10)
    insertAfter(linkList, node, node2)
}
test()

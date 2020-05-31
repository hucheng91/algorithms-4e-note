/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import LinkList, { LinkedNode } from '../../../../../datastructures/linked-list/LinkedList'
function removeAfter<T> (linkList: LinkList<T>, node: LinkedNode<T>) {
    const head = linkList.head;
    let currentNode = linkList.head;
    const result = false
    // eslint-disable-next-line no-cond-assign
    if (linkList.length === 1 || node.data === head.data) {
        linkList.head = null
    }

    while (currentNode) {
        if (node.data === currentNode.data) {
            currentNode.next = currentNode.next.next
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
    removeAfter(linkList, node)
}
test()

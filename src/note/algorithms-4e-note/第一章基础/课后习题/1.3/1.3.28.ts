/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import LinkList, { LinkedNode } from '../../../../../datastructures/linked-list/LinkedList'
function max (currentNode: LinkedNode<number>, value = 0): number {
    if (value <= currentNode.data) {
        value = currentNode.data
    }
    currentNode = currentNode.next
    if (!currentNode) { return value }
    return max(currentNode, value)
}

function test () {
    const linkList = new LinkList<number>()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append(3)
    linkList.append(1)
    linkList.append(20)
    const result = max(linkList.head, linkList.head.data)
    console.log(result)
}
test()

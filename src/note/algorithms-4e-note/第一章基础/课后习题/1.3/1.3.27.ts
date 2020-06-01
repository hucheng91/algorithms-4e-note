/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import LinkList from '../../../../../datastructures/linked-list/LinkedList'
function max<T> (linkList: LinkList<T>) {
    let currentNode = linkList.head;
    let value = currentNode.data
    debugger
    while (currentNode) {
        if (value <= currentNode.data) {
            value = currentNode.data
        }
        currentNode = currentNode.next
    }
    console.log(value)
}

function test () {
    const linkList = new LinkList<number>()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append(3)
    linkList.append(1)
    max(linkList)
}
test()

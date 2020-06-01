/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import LinkList from '../../../../../datastructures/linked-list/LinkedList'
function remove<T> (linkList: LinkList<T>, value: T) {
    let currentNode = linkList.head;

    if (linkList.head.data === value) {
        linkList.head = linkList.head.next
        return;
    }
    while (currentNode && currentNode.next) {
        if (value === currentNode.next.data) {
            currentNode.next = currentNode.next.next
        }
        currentNode = currentNode.next
    }
    console.log(JSON.stringify(linkList))
}

function test () {
    const linkList = new LinkList<number>()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append(3)
    linkList.append(1)
    remove(linkList, 1)
}
test()

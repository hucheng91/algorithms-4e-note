/*
 * @Author: hucheng
 * @Date: 2020-06-01 06:43:10
 * @Description: here is des
 */
import LinkList from '../../../../../datastructures/linked-list/LinkedList'
function deleteLastNoe<T> (linkList: LinkList<T>) {
    const head = linkList.head;
    let currentNode = head;
    while (currentNode.next) {
        if (!currentNode.next.next) {
            currentNode.next = null
            break
        }
        currentNode = currentNode.next;
    }
    console.log(JSON.stringify(linkList))
}

function test () {
    const linkList = new LinkList<number>()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append(3)
    deleteLastNoe(linkList)
}
test()

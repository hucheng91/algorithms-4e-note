/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import LinkList from '../../../../../datastructures/linked-list/LinkedList'
function deleteNode<T> (linkList: LinkList<T>, k:number) {
    const head = linkList.head;
    const currentNode = head;
    let index = 0
    if (linkList.length < k) {
        throw new Error('outof index')
    }
    if (k === 0) {
        linkList.head = null
        return
    }
    while (currentNode.next && index <= k) {
        if (index === k && currentNode.next.next) {
            currentNode.next = currentNode.next.next
        }
        index++
    }
    console.log(JSON.stringify(linkList))
}

function test () {
    const linkList = new LinkList<number>()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append(3)
    deleteNode(linkList, 2)
}
test()

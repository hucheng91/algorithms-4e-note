/*
 * @Author: hucheng
 * @Date: 2020-06-01 07:08:24
 * @Description: here is des
 */
import LinkList from '../../../../../datastructures/linked-list/LinkedList'
function find<T> (linkList: LinkList<T>, v: T) {
    const head = linkList.head;
    let currentNode = linkList.head;
    let result = false
    // eslint-disable-next-line no-cond-assign
    if (linkList.length === 1) {
        return v === head.data
    }

    while (currentNode) {
        if (v === currentNode.data) {
            result = true
            break
        }
        currentNode = currentNode.next
    }
    return result
}

function test () {
    const linkList = new LinkList<number>()
    linkList.append(0)
    linkList.append(1)
    linkList.append(2)
    linkList.append(3)
    const result = find(linkList, 10)
    console.log(result)
}
test()

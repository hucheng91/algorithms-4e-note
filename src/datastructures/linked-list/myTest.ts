/*
 * @Author: hucheng
 * @Date: 2020-05-17 11:37:10
 * @Description: here is des
 */
import { LinkedList, LinkedNode } from './LinkedList';
function genderLinListData () {
    const linkList = new LinkedList<number>();
    linkList.append(1);
    linkList.append(2);
    linkList.append(3);
    linkList.append(4);
    linkList.append(5);
    linkList.append(6);
    linkList.append(7);
    return linkList;
}
// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayLis
function test1 () {
    function formateNodeToList (head: LinkedNode<any>): any[] {
        const result: any[] = [];
        while (head) {
            result.push(head.data);
            head = head.next;
        }
        return result;
    }
    const linkList = genderLinListData();
    const result = formateNodeToList(linkList.head);
    console.log(result);
}

// 删除链表节点

function removeNodeForLinkList (node: LinkedNode<any>, linkList: LinkedList<any>) {
    const head = linkList.head;
    if (node === head) {
        linkList.head = head.next;
        return true;
    }
    // 最后一个节点,找到上一个节点
    if (!node.next) {
        let node = head;
        while (node.next.next) {
            node = node.next;
        }
        node.next = null;
        return node;
    }
    node.next = node.next.next;
    node.data = node.next.data;
    return node;
}
function reverseList (linkList: LinkedList<any>) {
    const head = linkList.head;
    let currentNode = null;
    let headNode = head;
    console.log(JSON.stringify(head));
    // eslint-disable-next-line no-unmodified-loop-condition
    while (head && head.next) {
        currentNode = head.next;
        head.next = currentNode.next;
        currentNode.next = headNode;
        headNode = currentNode;
    }
    return headNode;
}
debugger;
const result1 = reverseList(genderLinListData());
console.log(result1);

/*
 * @Author: hucheng
 * @Date: 2020-05-23 19:26:37
 * @Description: here is des
 */
import BinarySearchTree from './BinarySearchTree';
import AvlTree from './AvlTree';
import { Node } from './Node';
// const tree = new BinarySearchTree()
// tree.insert(50)
// tree.insert(90)
// tree.insert(20)
// // tree.insert(100)
// tree.insert(10)
// tree.insert(30)
// debugger;
// tree.inOrderTraverse(function test (node: any) {
//     console.log(node)
// })

const avlTree = new AvlTree();

avlTree.insert(50);
avlTree.insert(90);
avlTree.insert(20);
// tree.insert(100)
avlTree.insert(10);
avlTree.insert(30);

const node = avlTree.getRoot();
console.log(avlTree.getNodeHeight(node));

// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

// #思路
function reConstructBinaryTree (pre, vin) {
    const value = pre[0];
    const index = vin.indexOf(value); // 3
    const vinLeft = vin.slice(0, index); //
    const vinRight = vin.slice(index + 1);
    const preLeft = pre.slice(1, index + 1);
    const preRight = pre.slice(index + 1);

    const node = new Node<Number>(value);
    node.left = reConstructBinaryTree(preLeft, vinLeft);
    node.right = reConstructBinaryTree(preRight, vinRight);
    return node;
}

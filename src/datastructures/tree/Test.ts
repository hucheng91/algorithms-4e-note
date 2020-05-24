/*
 * @Author: hucheng
 * @Date: 2020-05-23 19:26:37
 * @Description: here is des
 */
import BinarySearchTree from './BinarySearchTree';
import AvlTree from './AvlTree';

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

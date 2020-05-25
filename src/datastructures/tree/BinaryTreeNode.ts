/*
 * @Author: hucheng
 * @Date: 2020-05-23 10:20:08
 * @Description: 二叉树节点
 */
import { Compare, defaultCompare, ICompareFunction } from '../../utils';
import { Node } from './Node';
export default class BinaryTreeNode {
    protected root: Node<T>;

    constructor (protected compareFn: ICompareFunction<T> = defaultCompare) {}
    insert (key: T) {
        if (this.root === null) {
            this.root = new Node(key);
            return this;
        }
        return this.insertNode(this.root, key);
    }

    protected insertNode (ndoe: Node<T>, key: T) {}
}

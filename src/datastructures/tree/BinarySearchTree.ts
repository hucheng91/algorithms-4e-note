/*
 * @Author: hucheng
 * @Date: 2020-05-23 10:14:26
 * @Description: 二叉搜索树
 */

import BiquadFilterNode from './BinaryTreeNode';
import Comparator from '../../utiils/Comparator';
export default class BinarySearchTree extends BiquadFilterNode {
    nodeValueComparator: Comparator;
    constructor (value: number) {
        super(value);
        this.nodeValueComparator = new Comparator();
    }

    insert (value: number) {
        if (this.nodeValueComparator.equal(this.value, null)) {
            this.value = value;
            return this;
        }
        if (this.nodeValueComparator.lessThan(value, this.value)) {
            if (this.left) {
                return this.left.insert(value);
            }

            const newNode = new BinarySearchTreeNode(value, this.compareFunction);
            this.setLeft(newNode);

            return newNode;
        }
    }
}

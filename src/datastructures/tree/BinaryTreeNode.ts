/*
 * @Author: hucheng
 * @Date: 2020-05-23 10:20:08
 * @Description: 二叉树节点
 */
import Comparator from '../../utils/Comparator';
export default class BinaryTreeNode {
    left: BinaryTreeNode;
    right: BinaryTreeNode;
    parent: BinaryTreeNode;
    value: number;
    nodeComparator: Comparator;
    constructor (value: number) {
        this.value = value;
        this.nodeComparator = new Comparator();
    }

    get leftHeight (): number {
        if (!this.left) {
            return 0;
        }

        return this.left.height + 1;
    }

    get rightHeight (): number {
        if (!this.right) {
            return 0;
        }

        return this.right.height + 1;
    }

    get height (): number {
        return Math.max(this.leftHeight, this.rightHeight);
    }

    get balanceFactor (): number {
        return this.leftHeight - this.rightHeight;
    }

    get uncle (): BinaryTreeNode {
        if (!this.parent) {
            return undefined;
        }

        if (!this.parent.parent) {
            return undefined;
        }

        if (!this.parent.parent.left || !this.parent.parent.right) {
            return undefined;
        }

        if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
            return this.parent.parent.right;
        }

        return this.parent.parent.left;
    }

    setValue (value: number): BinaryTreeNode {
        this.value = value;

        return this;
    }

    setLeft (node: BinaryTreeNode): BinaryTreeNode {
        if (this.left) {
            this.left.parent = null;
        }

        this.left = node;

        if (this.left) {
            this.left.parent = this;
        }

        return this;
    }

    setRight (node: BinaryTreeNode): BinaryTreeNode {
        if (this.right) {
            this.right.parent = null;
        }

        this.right = node;

        if (node) {
            this.right.parent = this;
        }

        return this;
    }

    removeChild (nodeToRemove: BinaryTreeNode): boolean {
        if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
            this.left = null;
            return true;
        }

        if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
            this.right = null;
            return true;
        }

        return false;
    }

    replaceChild (nodeToReplace: BinaryTreeNode, replacementNode: BinaryTreeNode): boolean {
        if (!nodeToReplace || !replacementNode) {
            return false;
        }

        if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
            this.left = replacementNode;
            return true;
        }

        if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
            this.right = replacementNode;
            return true;
        }

        return false;
    }

    static copyNode (sourceNode: BinaryTreeNode, targetNode: BinaryTreeNode): void {
        targetNode.setValue(sourceNode.value);
        targetNode.setLeft(sourceNode.left);
        targetNode.setRight(sourceNode.right);
    }

    traverseInOrder (): number[] {
        let traverse: number[] = [];

        if (this.left) {
            traverse = traverse.concat(this.left.traverseInOrder());
        }

        traverse.push(this.value);
        if (this.right) {
            traverse = traverse.concat(this.right.traverseInOrder());
        }

        return traverse;
    }

    toString () {
        return this.traverseInOrder().toString();
    }
}

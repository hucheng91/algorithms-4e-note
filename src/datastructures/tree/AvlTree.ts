import BinarySearchTree from './BinarySearchTree';
import { Compare, defaultCompare, ICompareFunction } from '../../utils';
import { Node } from './Node';
/*
 * @Author: hucheng
 * @Date: 2020-05-24 17:26:24
 * @Description: AVL 树
 */
enum BalanceFactor {
    UNBALANCED_RIGHT = 1,
    SLIGHTLY_UNBALANCED_RIGHT = 2,
    BALANCED = 3,
    SLIGHTLY_UNBALANCED_LEFT = 4,
    UNBALANCED_LEFT = 5
}

export default class AVLTree<T> extends BinarySearchTree<T> {
    constructor (protected compareFn: ICompareFunction<T> = defaultCompare) {
        super(compareFn);
    }

    /**
     * 计算节点高度
     * @param node
     */
    private getNodeHeight (node: Node<T>): number {
        if (node == null) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    /**
     * 向左的单旋转
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     *
     * @param node Node<T>
     */
    private rotationRR (node: Node<T>) {
        const tem = node.left;
        node.left = tem.right;
        tem.right = node;
        return tem;
    }
}

import { Compare, defaultCompare, ICompareFunction } from '../../utils';
import { Node } from './Node';

export default class BinarySearchTree<T> {
    protected root: Node<T>;

    constructor (protected compareFn: ICompareFunction<T> = defaultCompare) {}

    insert (key: T) {
        // special case: first key
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    protected insertNode (node: Node<T>, key: T) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left === null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else if (node.right === null) {
            node.right = new Node(key);
        } else {
            this.insertNode(node.right, key);
        }
    }

    getRoot () {
        return this.root;
    }

    search (key: T) {
        return this.searchNode(this.root, key);
    }

    private searchNode (node: Node<T>, key: T): boolean {
        if (node == null) {
            return false;
        }

        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        }
        // key is equal to node.item
        return true;
    }

    inOrderTraverse (callback: Function) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNoRecursive (callback: Function) {
        const result = [];
        const stack = [];
        let current = this.root;
        while (current || stack.length > 0) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            result.push(current.key);
            current = current.right;
        }
    }

    /**
     * 中序遍历
     * @param node
     * @param callback
     */
    private inOrderTraverseNode (node: Node<T>, callback: Function) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            console.log(node);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    /**
     * 先序遍历
     * @param callback
     */
    preOrderTraverse (callback: Function) {
        this.preOrderTraverseNode(this.root, callback);
    }

    private preOrderTraverseNode (node: Node<T>, callback: Function) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverseNoRecursive (callback: Function) {
        const result = [];
        const stack = [];
        let current = this.root;
        while (current && stack.length > 0) {
            while (current) {
                result.push(current.key);
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            current = current.right;
        }
    }

    /**
     * 后续遍历
     * @param callback
     */
    postOrderTraverse (callback: Function) {
        this.postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNoRecursive (callback: Function) {
        const result = [];
        const stack = [];
        let last = null; // 标记上一个访问的节点
        let current = this.root;
        while (current || stack.length > 0) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            current = stack[stack.length - 1];
            if (!current.right || current.right === last) {
                current = stack.pop();
                result.push(current.key);
                console.log(current.key);
                last = current;
                current = null; // 继续弹栈
            } else {
                current = current.right;
            }
        }
        return result;
    }

    private postOrderTraverseNode (node: Node<T>, callback: Function) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    min () {
        return this.minNode(this.root);
    }

    protected minNode (node: Node<T>) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }

    max () {
        return this.maxNode(this.root);
    }

    protected maxNode (node: Node<T>) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    remove (key: T) {
        this.root = this.removeNode(this.root, key);
    }

    protected removeNode (node: Node<T>, key: T) {
        if (node == null) {
            return null;
        }

        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // key is equal to node.item

            // handle 3 special conditions
            // 1 - a leaf node
            // 2 - a node with only 1 child
            // 3 - a node with 2 children

            // case 1
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }

            // case 2
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }

            // case 3
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }
}

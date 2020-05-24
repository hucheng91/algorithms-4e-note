/*
 * @Author: hucheng
 * @Date: 2020-05-23 18:59:59
 * @Description: here is des
 */
export class Node<K> {
    left: Node<K> = null;
    right: Node<K> = null;
    key: K;
    constructor (key: K) {
        this.key = key;
    }

    toString () {
        return `${this.key}`;
    }
}

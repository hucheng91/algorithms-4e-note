// @ts-ignore

class LinkNode<T>{
    data: T;
    next: LinkNode<T>;
    constructor(data: T){
        this.data = data; // 当前节点
        this.next = null; // 下一个元素
    }
}

class LinkList<T>{
    length: number;
    head: LinkNode<T>;
    constructor(){
        this.length =0;
        this.head = null
    }
    private _isOutOfIndex(position){
        if( position === undefined
            || position === null 
            || position < 0 
            || position > this.length){
                return true
        }
        return false;
    }
    getEleAt(position:number){
        // @ts-ignore
        let i = 0;
        if(this._isOutOfIndex(position)){ return null }
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }
    append(ele:T){
        // @ts-ignore
        const node = new LinkNode<T>(ele);
        const _fn = {
            frist: () => {
                this.head = node;
                this.length ++
                return node;
            },
            append: () => {
                let lastEle = this.getEleAt(this.length - 1)
                lastEle.next = node;
                this.length ++;
                return node;
            }
        }
        if(this.head == null){
            return   _fn.frist();
        }

        return _fn.append()
    }
    insert(ele:T,position:number){
        if(this._isOutOfIndex(position)){ return null }
        // @ts-ignore
        let node = new LinkNode<T>(ele)
        const _fn = {
            frist: () =>  {
                node.next = this.head;
                this.head = node;
            },
            other: () =>  {
                let pre = this.getEleAt(position-1)
                node.next = pre.next
                pre.next = node;
            }
        }
        if(position === 0){
           _fn.frist()
        }else{
            _fn.other()
        }
        this.length ++
        return true
    } 
    indexOf (ele) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.data === ele){
                return i;
            } 
            current = current.next;
        }
        return -1;
    }
    removeAt(position:number): T{
        if(this._isOutOfIndex(position)){ return null }

        let currentNode;
        if(position === 0){
            currentNode = this.head.next;
            this.head = currentNode;
        }else{
            const preNode = this.getEleAt(position-1)
            currentNode = preNode.next;
            preNode.next = currentNode.next;
        }
        this.length--
        return currentNode.data;
    }
}
const linkList = new LinkList<number>()
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
linkList.append(5)
linkList.append(6)
linkList.append(7)
linkList.insert(10,3)
console.log(JSON.stringify(linkList))
console.log('indexof',linkList.indexOf(10))
linkList.removeAt(3)
console.log(JSON.stringify(linkList))
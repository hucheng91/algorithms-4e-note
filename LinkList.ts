// @ts-ignore
class LinkNode{
    data: any;
    next: any;
    constructor(data){
        this.data = data; // 当前节点
        this.next = null; // 下一个元素
    }
}

class LinkList{
    length: number;
    head: LinkNode;
    constructor(){
        this.length =0;
        this.head = null
    }
    getEleAt(position){
        // @ts-ignore
        let i = 0;
        if(position < 0 || position > this.length){return null}
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }
    append(ele){
        // @ts-ignore
        const node = new LinkNodeele(ele);
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
    insert(ele,position){
        if(position < 0 || position > this.length){return null}
        // @ts-ignore
        let node = new Node(ele)
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
}
const linkList = new LinkList()
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
linkList.append(5)
linkList.append(6)
linkList.append(7)
console.log(JSON.stringify(linkList))
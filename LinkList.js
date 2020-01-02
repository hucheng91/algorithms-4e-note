// @ts-ignore
var LinkNode = /** @class */ (function () {
    function LinkNode(data) {
        this.data = data; // 当前节点
        this.next = null; // 下一个元素
    }
    return LinkNode;
}());
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.length = 0;
        this.head = null;
    }
    LinkList.prototype._isOutOfIndex = function (position) {
        if (position === undefined
            || position === null
            || position < 0
            || position > this.length) {
            return true;
        }
        return false;
    };
    LinkList.prototype.getEleAt = function (position) {
        // @ts-ignore
        var i = 0;
        if (this._isOutOfIndex(position)) {
            return null;
        }
        var current = this.head;
        for (var i_1 = 0; i_1 < position; i_1++) {
            current = current.next;
        }
        return current;
    };
    LinkList.prototype.append = function (ele) {
        var _this = this;
        // @ts-ignore
        var node = new LinkNode(ele);
        var _fn = {
            frist: function () {
                _this.head = node;
                _this.length++;
                return node;
            },
            append: function () {
                var lastEle = _this.getEleAt(_this.length - 1);
                lastEle.next = node;
                _this.length++;
                return node;
            }
        };
        if (this.head == null) {
            return _fn.frist();
        }
        return _fn.append();
    };
    LinkList.prototype.insert = function (ele, position) {
        var _this = this;
        if (this._isOutOfIndex(position)) {
            return null;
        }
        // @ts-ignore
        var node = new LinkNode(ele);
        var _fn = {
            frist: function () {
                node.next = _this.head;
                _this.head = node;
            },
            other: function () {
                var pre = _this.getEleAt(position - 1);
                node.next = pre.next;
                pre.next = node;
            }
        };
        if (position === 0) {
            _fn.frist();
        }
        else {
            _fn.other();
        }
        this.length++;
        return true;
    };
    LinkList.prototype.indexOf = function (ele) {
        var current = this.head;
        for (var i = 0; i < this.length; i++) {
            if (current.data === ele) {
                return i;
            }
            current = current.next;
        }
        return -1;
    };
    LinkList.prototype.removeAt = function (position) {
        if (this._isOutOfIndex(position)) {
            return null;
        }
        var currentNode;
        if (position === 0) {
            currentNode = this.head.next;
            this.head = currentNode;
        }
        else {
            var preNode = this.getEleAt(position - 1);
            currentNode = preNode.next;
            preNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.data;
    };
    return LinkList;
}());
var linkList = new LinkList();
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);
linkList.append(5);
linkList.append(6);
linkList.append(7);
linkList.insert(10, 3);
console.log(JSON.stringify(linkList));
console.log('indexof', linkList.indexOf(10));
linkList.removeAt(3);
console.log(JSON.stringify(linkList));

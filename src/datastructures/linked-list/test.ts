/*
 * @Author: hucheng
 * @Date: 2020-05-15 07:42:28
 * @Description: here is des
 */

import LinkedList from './LinkedList';
const linkList = new LinkedList<number>();
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

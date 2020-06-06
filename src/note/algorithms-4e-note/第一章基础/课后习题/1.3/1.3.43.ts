/*
 * @Author: hucheng
 * @Date: 2020-06-06 14:54:18
 * @Description: here is des
 */
// 列举文件文件列表

const fs = require('fs')
const path = require('path')

function getFilePathForDir (docPath: string, resultArray :[] = []) {
    if (!fs.existsSync(docPath)) {
        throw new Error(`${docPath} is not exit!`)
    }
    const array = fs.readdirSync(docPath)
    array.forEach(function (ele, index) {
        const info = fs.statSync(docPath + '/' + ele)
        if (info.isDirectory()) {
            getFilePathForDir(docPath + '/' + ele, resultArray)
        } else {
            resultArray.push(path.join(docPath, ele))
        }
    })
    return resultArray
}

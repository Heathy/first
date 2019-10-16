const {
    readFile,
    writeFile
} = require('fs')

// 读取这份源文件，读出来之后需要加工文件
const readCode = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, (err, data) => {
            err ? reject(err) : resolve(data.toString())
            console.log(resolve(data.toString()));
        })
    })
}
// 删除console.log('xxx')
const removeConsole = (code) => {
    let output = code.replace(/console.log\([0-9a-z'\[,\s\]]+\)/g, '')
    return output
}
//let转化为var
const let2var = (code) => {
    return code.replace(/let/g, 'var')
}
//const转化为var
const const2var = (code) => {
    return code.replace(/const/g, 'var')
}
//删除注释
const annotationDel = (code) => {
    return code.replace(/\/\//g,'')
}
// 写入代码
const writeCode = (path, code) => {
    return new Promise((resolve, reject) => {
        writeFile(path, code, (err) => {
            err ? reject(err) : resolve()
        })
    })
}
    ; (async () => {
        let code = await readCode('../src/index.js')
        code = removeConsole(code)
        code = let2var(code)
        await writeCode('../dist/index.js', code)
        // console.log(code)
    })()

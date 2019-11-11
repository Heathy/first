const path = require('path');
//路径合并处理
const result = path.resolve('/foo/bar', '../tnp/file/');
//算出一个绝对路径
console.log(result);
console.log(_dirname);
//路径模块
console.log(path.resolve(_dirname, './path.js'))
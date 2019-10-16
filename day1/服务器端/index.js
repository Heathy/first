//导入建议写在最上面
//把jquery的代码引入进来
var obj = require('./jquery.js')
// console.log(arr)
// console.log(arr[0](9, 16))
// console.log(9,16)
//因为引入./jquery.js里面是一个对象
console.log(obj)
console.log(obj.plus(4, 5))
console.log(obj.sub(1,2))
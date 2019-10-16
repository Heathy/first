//在生产坏境下，有大量的注释或者调试代码console.log(xxx)
//在发布坏境下应该要删除的
console.log(1)
let plus = (a, b) => a + b
console.log('12211212')
console.log(['1', '2', '4'])
//注释
const { name } = {
    name: 'yao',
    skill: ['js', 'ps']
}
console.log(name)
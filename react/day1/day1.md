# React

用于构建用户界面的 JavaScript 库

库
 - jquery
 - axios

框架
 - express (后端)
 - vue
 - react

Vue(View)，数据层跟视图层，Vue大部分关注视图层

React，只关注UI(视图层)，也是一个MVVM框架

- 声明式渲染`<div>{{}}</div>`
- 组件化`<Header/><Header/><Header/>`
- 混合开发，既可以用在网页端，也可以手机端，或者PC端


这是`Vue`的写法
```html
<!-- View -->
<!-- 容器 -->
<div id="demo"></div>
<script src="vue.js"></script>
<script>
    new Vue({
        el:"#demo",
        data:{}
    })    
</script>
```

react的写法跟上面会有点一样
```html
<div id="demo"></div>
<!-- 提供React.createElement帮你构造虚拟DOM -->
<script src="react.js"></script>
<!-- 提供ReactDOM.render帮你虚拟DOM转化真实DOM -->
<script src="react-dom.js"></script>
<script>
    // react提供了全局变量window.React
    // react-dom提供了全局变量window.ReactDOM
    console.log(window)
    // 函数会执行，变成一个对象，这个对象其实是描述真实DOM的
    const data = {
            name: 'yao'
        }
    const template = React.createElement('div', null, data.name)
    const el = document.querySelector('#demo')
    console.log(template)
    ReactDOM.render(template, el)
</script>
```

react先把下面字符串转化为函数
```html
<div>hello world</div>
```
通过webpack转化
```js
React.createElement('div', null, data.name)
View = React.createElement('div', null, Model)
```
因为函数可以随时接受新的数据去执行，该函数在数据变化的时候会执行
```js
{
    $$typeof: Symbol(react.element)
    key: null
    props:
    children: "yao"
    __proto__: Object
    ref: null
    type: "div"
    _owner: null
    _store: {validated: false}
    _self: null
    _source: null
}
```
12313
不存着字符串，存对象，是因为后面对比字符串的难度太大，但是比对对象比较小，操作对象是成本是比较低，空间利用率变大，空间换时间


我们不可能每一次写都是用下面这种写法的
```js
React.createElement('div', null, data.name)
```
我们会用一种类似html的语法来去实现，这种语法JSX

```html
<div>{data.name}</div>
```

所以我们在页面可以使用`babel.js`帮我们转化，不过注意的是，在发布环境这份babel.js是不能引入的，jsx讲道理是一门预编译语言(地位相当于sass)，在实际项目中要把该处理放在`webpack`中去做处理，不应该把压力放在浏览器
```html
<div id="demo"></div>
<!-- 提供React.createElement帮你构造虚拟DOM -->
<script src="react.js"></script>
<!-- 提供ReactDOM.render帮你虚拟DOM转化真实DOM -->
<script src="react-dom.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const data = {
        name: 'yao'
    }
    // JSX
    const template = <div>hello world</div>
    const el = document.querySelector('#demo')
    console.log(template)
    ReactDOM.render(template, el)
</script>
```
在后期，我们会使用脚手架去搭建开发环境，内部使用 Babel 和 webpack，但你无需了解它们的任何细节
```bash
npx create-react-app my-app
# 当当于
npm install create-react-app -g
create-react-app my-app
```
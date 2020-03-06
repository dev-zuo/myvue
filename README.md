# myvue
将vue功能点细化，一步一步尝试实现vue.js

## 功能点demo阶段

### 1.声明式渲染
#### 元素内容渲染
题目：实现myvue.js，引入后让页面可正常渲染 message 信息，在console中修改 app.message 的值，页面内容也跟着更新
```html
<div id="app">
  {{ message }}
</div>
```
```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
#### v-bind属性渲染
题目：实现myvue.js，引入后可将title属性与message内容关联，正常渲染title属性值，且 app2.message 修改后，title属性值动态更新
```html
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
```
```js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
```
### 2.条件与循环
#### v-if渲染
题目：实现myvue.js，引入后，可通过v-if的值，隐藏或显示页面元素，修改 app3.seen 可动态切换隐藏显示 
```html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```
```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```
#### v-for渲染
题目：实现myvue.js，引入后，可通过v-for 渲染列表内容，且app4.data.todos内容改变后，页面动态更新
```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```
```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
// 在控制台里，输入 app4.todos.push({ text: '新项目' })，你会发现列表最后添加了一个新项目。
```

### 3.处理用户输入
#### v-on 监听事件
题目：实现myvue.js，引入后，可以处理v-on绑定的事件，成功调用methods里面的方法
```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转消息</button>
</div>
```
```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
// 注意在 reverseMessage 方法中，我们更新了应用的状态，
// 但没有触碰 DOM——所有的 DOM 操作都由 Vue 来处理，你编写的代码只需要关注逻辑层面即可。
```
#### v-model 表单输入与应用状态之间双向绑定
题目：实现myvue.js，引入后，通过v-model将input和 data里的message属性进行双向绑定，app6.message改变 input输入内容改变，输入内容改变 data.message的值也跟着改变
```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```
```js
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```


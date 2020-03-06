
class Vue {
  constructor(option) {
    let { el, data } = option
    this.appElement = document.querySelector(el)
    this.data =  data
    this.optList = {} // 用来存储 key 及对应的 dom操作
    this.handler() 
  }
  handler() {
    // 渲染 {{ message }}
    // 在 v-cloak的文档中有这样一个描述；这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。 
    // vue模板数据使用的是 Mustache 模板语法

    // 记录包含{{}}的textNode, 然后提取变量，准备渲染
    // 我们这里简单点，只获取 <div id="app"> {{ message }} </div> 的内容
    // 且不引入 multache进行render
    let textNode = this.appElement.childNodes[0] // textNode.data => {{message}}
    let key =textNode.data.split("{{")[1].split('}}')[0].replace(/^\s+|\s+$/g, '') // message
    this.optList[key] = () => {
      textNode.textContent = this.data[key]
    }
    this.optList[key]()
 
    // 当 app.message 变更后，页面也跟着更新，数据驱动视图
    // 为data里的每一个元素添加get, set拦截
    Object.keys(this.data).forEach(item => {
      Object.defineProperty(this, item, {
        get() {
          return this.data[item]
        },
        set(newVal) {
          this.data[item] = newVal
          // 如果有dom操作进行dom操作
          this.optList[item]()
        }
      })
    })
  }

}
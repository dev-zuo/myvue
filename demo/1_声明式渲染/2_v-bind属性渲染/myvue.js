
class Vue {
  constructor(option) {
    let { el, data } = option
    this.appElement = document.querySelector(el)
    this.data =  data
    this.optList = {} // 用来存储 key 及对应的 dom操作
    this.handler() 
  }
  handler() {
    // 查找element元素，看是否有 v-bind:xxx的属性，或者 :xxx的属性
    let span = this.appElement.firstElementChild // span的dom
    let attr = span.attributes[0] // v-bind:title="message"
    // 切分，获取key   attr.nodeName  'v-bind:titie'，attr.nodeValue = message
    let prop = attr.nodeName.split('v-bind:')[1] // title
    let datakey = attr.nodeValue // message
    this.optList[datakey] = () => {
      span.setAttribute(prop, this.data[datakey])
    }
    this.optList[datakey]()
 
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
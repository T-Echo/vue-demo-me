// 引入vue
import Vue from 'vue'
// 引入主组件
import App from './App.vue'
//引入样式(把样式文件放在哪)
import './index.css'
/* eslint-disable no-new */
new Vue({
  // 外部元素选择器
  el: '#app',
  // 注册引入的子组件
  components: {
    App
  },
  // 以哪个组件为模板,渲染到el选中的区域中
  template: '<App/>'
})

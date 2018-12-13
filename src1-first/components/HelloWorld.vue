<template>
  <h2 class="title">{{msg}}</h2>
</template>
<script>
//  子组件要暴露出去，主组件引入
  export default {
//    给这个组件一个名字
    name: 'HelloWorld',
//    data必须是函数类型
    data (){
      return {
        msg: 'First Vue Component222'
      }
    }
  }
</script>
<style>
  .title{
    color: red;
  }
</style>

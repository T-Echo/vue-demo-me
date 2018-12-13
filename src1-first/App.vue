<template>
  <div>
    <!--应用子组件-->
    <HelloWorld/>
    <img src="./assets/logo.png" alt="logo" class="logo">
  </div>
</template>
<script>
//  引入子组件
  import HelloWorld from './components/HelloWorld.vue';
//  主组件暴露出去，在入口js文件中引入
  export default {
    name: 'App',
//    注册引入的子组件
    components: {
      HelloWorld
    }
  }
</script>
<style>
  .logo{
    width: 200px;
    height: 200px;
  }
</style>

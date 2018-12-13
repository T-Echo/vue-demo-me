<template>
  <ul class="todo-main">
    <Item :deleteTodo="deleteTodo" v-for="(todo,index) in todos" :todo="todo" :key="index" :index="index"/>
  </ul>
</template>

<script>
  import Item from './Item.vue'

  export default {
    //props定义成数组类型，接收传递进来的数据
    props: ['todos','deleteTodo'],
    components: {
      Item
    }
  }
</script>

<style scoped>

</style>

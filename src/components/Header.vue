<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.13="save" v-model="title"/>
  </div>
</template>

<script>
  export default {
    props: {
      addTodo: Function
    },
    data (){
      return {
        title: ''
      }
    },
    methods: {
      //保存用户输入的数据
      save(){
        //获取用户输入的数据
        const title = this.title.trim();
        //检查数据的合法性
        if (!title){
          return
        }
        //创建todo对象
        const todo = {complete:false,title}
        //将todo对象添加到todos数组中(注意传递过来的方法在调用时this指向原来的组件)
        this.addTodo(todo)
        //清空输入框
        this.title = ''
      }
    }
  }
</script>

<style scoped>

</style>

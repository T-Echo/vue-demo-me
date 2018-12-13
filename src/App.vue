<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo"/>
        <List :todos="todos" :deleteTodo="deleteTodo"/>
        <Footer :todos="todos" :selectAllTodos="selectAllTodos" :clearAll="clearAll"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  import storageUtils from './utils/storageUtils'

  export default {
    data (){ // 用函数的方式，返回一个对象
      return {
        /*todos: [
          {complete : false, title : '吃饭'},
          {complete : true, title : '睡觉'},
          {complete : false, title : '打豆豆'},
        ],*/
        todos: storageUtils.readTodos()
      }
    },
    methods:{
      //添加数据
      addTodo(todo){
        //unshift改变了原数组，不需要再return
        this.todos.unshift(todo);
      },

      //根据索引删除指定数据
      deleteTodo(index){
        this.todos.splice(index,1);
      },

      //对所有todo进行全选/不全选(是通过改变todo中complete的值来改变的是否选中)
      selectAllTodos(isSelect){
        //forEach不会生成新数组，不需要return
        this.todos.forEach(todo => todo.complete === isSelect)
      },

      //清除所有已完成的todo
      clearAll(){
        this.todos = this.todos.filter(todo => !todo.complete)
      }

    },
    components: {
      Header,
      List,
      Footer
    },
    watch: {
      todos:{
        deep: true,
        handler: function(value){
          storageUtils.saveTodos(value);
        }
        /*handler : storageUtils.saveTodos*/
      }
    }
  }
</script>

<style scoped>

</style>

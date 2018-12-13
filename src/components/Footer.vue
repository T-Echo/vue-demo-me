<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}} / 全部{{todos.length}}</span>
        </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props:{
      todos: Array,
      selectAllTodos: Function,
      clearAll: Function
    },
    computed:{
      completeSize(){ // 只涉及到读取，只用到get
        return this.todos.reduce((pre,todo) => todo.complete ? pre + 1 : pre + 0, 0)
      },
      selectAll:{ //涉及到读取、监视属性值变化（用到get、set）
        get (){
          //让返回值是布尔值，如果全部的数量===已完成的数量，
          // 并且全部的数量(因为前面判断了全部数量===已完成的数量，所以这里也可以用已完成的数量) >0
          //则返回true
          return this.todos.length === this.completeSize && this.completeSize > 0
        },
        set (value){ // value存储的就是当前checkbox是否选中的值：布尔值
          this.selectAllTodos(value);
        }
      }
    }
  }
</script>

<style scoped>

</style>

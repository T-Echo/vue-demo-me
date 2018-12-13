<template>
  <li :style="{background:'bgColor'}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
      index: Number,
      deleteTodo: Function
    },
    data(){
      return {
        bgColor: 'white',
        isShow:false
      }
    },
    methods: {
      handleEnter(isEnter){
        if (isEnter){
          this.bgColor = '#ccc';
          this.isShow = true
        } else {
          this.bgColor = 'white';
          this.isShow = false
        }
      },
      deleteItem(){
        if (window.confirm('确定要删除吗')){
          this.deleteTodo(this.index);
          //解决删除某个todo后下一个todo是鼠标移入的状态
          this.bgColor = 'white';
          this.isShow = false
        }
      }
    }
  }
</script>

<style scoped>

</style>

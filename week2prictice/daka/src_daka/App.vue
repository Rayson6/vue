<template>
  <div id="app">
    <div class="header">
      <span v-for="(item,index) in listArr" :class="{'active':index==ind}" :key="index" @click="headerFn(index)" >{{item}}</span>
    </div>
    <my-list :data="data"/>

  </div>
</template>

<script>
import myList from './components/list'
import mock from './mock/mock.js'

export default {
  name: 'App',
  components: {
    myList
  },
  data(){
    return {
      ind:0,
      listArr:["未开始","已打卡","已放弃","全部"],
      data:[]
      
    }
  },
  created(){
    this.data = mock.list;
    this.data = this.render(this.ind)
  },
  methods:{
    headerFn(ind){
       this.ind = ind;
       this.data=this.render(ind)
    },
    render(ind){
      return mock.list.filter(item=>item.tit==ind)
    }
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  .header{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items:center;
    
  }
  .header span{
      padding: 3px;
    }
  .active{
    font-weight: bold;
    background: #ffcd42;
  }

</style>

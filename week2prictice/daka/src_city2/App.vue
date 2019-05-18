<template>
  <div id="app">
    <div class="left">
       <my-province :data="data" @getCity="getCity" :count="count" :countInd="countInd"></my-province>
    </div>
    <div class="right">
        <my-city :ind="ind" :data="data[ind].cities" v-if="data[ind]" @cityCount="countChange"></my-city>
    </div>
   
  </div>
</template>

<script>
import myProvince from './components/province';
import myCity from './components/city';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    myProvince,
    myCity
  },
  data(){
    return {
      data:[],
      ind:0,
      count:0,
      countInd:0
    }
  },
  created(){
    axios.get("/getData")
    .then((res)=>{
      this.data = res.data.data
 
      this.data[this.ind].cities.forEach(item=>this.$set(item,'flag',false));
      this.data[this.ind].cities.forEach(item=>this.$set(item,"count",this.count))
    
    })
  },
  watch:{
    ind(news,olds){
      this.data[this.ind].cities.forEach(item=>this.$set(item,'flag',false));
      this.data[this.ind].cities.forEach(item=>this.$set(item,"count",this.count))
    }
  },
  methods:{
     getCity(ind){
       this.ind = ind;
     },
     countChange(count,index){
        this.count = count;
        this.countInd = index
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
  html,body{
    width: 100%;
    height: 100%;
  }
  ul{
    list-style: none;
  }
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    background: #2472c8;
    overflow: hidden;
    
  }
  .left{
    width:100px;
    height: 100%;
    border-right:1px solid #ccc;
    overflow-y:auto;

  }
  .right{
    flex:1;
    height: 100%;
  }
  



</style>

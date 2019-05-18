<template>
  <div>
      <ul>
        <li v-for="(item,index) in data" :key="index" @click="sendCity(index)">{{item.name}} <i :class="{active:data[countInd].count!=0}">1</i> </li>
      </ul>
  </div>
</template>

<script>
  export default {
      props:["data","count","countInd"],
      methods:{
        sendCity(ind){
           this.$emit("getCity",ind)
        }
      }
  }
</script>

<style lang="scss" scoped>
    li{
        width: 88px;
        height: 40px;
        background: #fdd10a;
        font-weight: bold;
        text-align: center;
        line-height: 40px;
        margin: 6px;
        border-radius:5px;
        position: relative;
        i{
          display: block;
          width: 20px;
          height: 20px;
          background: red;
          color:#fff;
          position: absolute;
          right:5px;
          top:5px;
          border-radius: 50%;
          font-size: 12px;
          font-style:normal;
          line-height: 20px;
          text-align: center;
          display: none;
        }
        .active{
          display: block;
        }
    }
</style>
<template>
    <div>
        <ul>
            <li v-for="(item,index) in data" :key="index" @click="sendNum(index)" :class="{'active':item.flag}">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            ind:Number,
            data:Array
        },
        data(){
           return {
               count:0
               }
        },
        methods:{
            sendNum(ind){
                if(!this.data[ind].flag){
                    this.data[ind].count++;
                }
                this.data[ind].flag = !this.data[ind].flag
                this.$emit("cityCount",this.data[ind].count,ind)
            }
        }
    }
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    height: 100%;
        overflow-y:auto;
}
    ul{
        padding: 10px;
        list-style: none;
        display: flex;
        flex-wrap:wrap;
    }
    li{
        padding:3px 5px;
        border:1px solid #fff;
        color:#fff;
        margin:3px;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
    }
    .active{
        background: #fff;
        color:#2472c8;
    }
</style>
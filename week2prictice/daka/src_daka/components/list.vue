<template>
  <div class="box">
      <!-- <div v-if="data.length==0" >此分支没有数据</div> -->
    <div v-for="(item,index) in data" :key="index" class="son">
      <div class="yi">
        <h3>{{item.content}}</h3>
        <span>{{listArr[item.tit]}}</span>
      </div>
      <p>{{item.title}}</p>
      <div class="er">
        <p>面试时间：{{item.time}}</p>
        <span>{{item.bool?"已提醒":"未提醒"}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      listArr: ["未开始", "已打卡", "已放弃", "全部"]
    };
  }
};
</script>

<style lang="scss" scoped>
.box {
  padding: 0 10px;

  .son {
    border-bottom: 1px solid #ccc;
  }
  p {
    font-size: 12px;
    color: gray;
  }
}
.yi {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    padding: 3px;
    background: lightpink;
    color: darkred;
    font-size: 14px;
  }
}
.er {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    padding: 3px;
    background: #eee;
    color: gray;
    font-size: 14px;
  }
}
</style>
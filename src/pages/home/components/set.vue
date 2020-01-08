<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span 设置
    span(class="sright")
  .section
    .setpositionTime
      span 隔多少毫秒传一次地理位置信息：
      input( type="number", v-model="iptvalue")
</template>

<script>
export default {
  name: '',

  data () {
    return {
      iptvalue: localStorage.getItem('positionTime'),
    }
  },

  methods: {

  },
  watch: {
    iptvalue(curVal,oldVal) {
      // console.log(curVal,oldVal)
      localStorage.setItem('positionTime', curVal)
    }
  },
  mounted() {
    let thit = this;
    mui.back = function() { // 监听返回按钮返回到登录页面
      thit.$router.push({path: '/home'})
    }
  },
}
</script>

<style lang="scss">
.header{
  width: 100%;
  height: 1.7rem;
  background: rgb(65, 198, 254);
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    color: rgb(255, 255, 255);
    font-size: 0.39rem;
    font-weight: 600;
  }
  .sleft{
    margin-left: 0.4rem;
  }
  .sright{
    margin-right: 0.4rem;
  }
}
.section{
  width: 100%;
  .setpositionTime{
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0.4rem;
    border-bottom: solid 1px #ccc;
    span{
      font-size: 0.373rem;
    }
    input{
      border-radius: 0.16rem;
      border: solid 1px #2c3e50;
      outline: none;
      padding: 0.05rem;
      text-align: center;
      font-size: 0.373rem;
    }
  }
}
</style>

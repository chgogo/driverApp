<template lang="jade">
.mian
  .header
    router-link(to="/",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span 身份选择
    span(class="sright")
  .section
    .title
      .wecom 欢迎进入
      .wename 和盛兴行物流平台
    .choice “ 请选择你的身份 ”
    .identity
      .personal( @click="personal")
        img(src="@/assets/homeImg/gerenzhuche@2x.png")
      .company( @click="company")
        img(src="@/assets/homeImg/gongsizhuche@2x.png")
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      
    }
  },
  methods: {
    personal() { // 个人注册
      this.$router.push({ path: '/personal',query:{ type: 1}})
    },
    company() { // 公司注册
      this.$router.push({ path: '/company',query:{ type: 0}})
    }
  }
}
</script>

<style lang="scss" scoped>
.section{
  width: 100%;
  .title{
    width: 100%;
    margin-top: 1.333rem;
    .wecom{
      margin-left: 0.77rem;
      font-weight: bold;
      font-size: 0.78rem;
      color: rgb(0, 0, 0);
      text-align: left;
    }
    .wename{
      font-size: 0.53rem;
      margin-left: 0.77rem;
      margin-top: 0.5rem;
      color: rgb(0, 0, 0);
      text-align: left;
    }
  }
  .choice{
    font-size: 0.34rem;
    margin-top: 0.82rem;
    text-align: center;
    color: rgb(0, 0, 0);
    font-weight: bold;
  }
  .identity{
    margin-top: 1.6rem;
    width: 100%;
    display: flex;
    .personal{
      margin-left: 1.14rem;
      img{
        width: 3.52rem;
        height: 3.9rem;
      }
    }
    .company{
      margin-left: 1.14rem;
      img{
        width: 3.52rem;
        height: 3.9rem;
      }
    }
  }
}
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
</style>
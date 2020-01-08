<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('kefu.ke')}}
    span(class="sright")
  .section
    .title {{ $t('kefu.lxkefu')}}
    p {{ $t('kefu.lxphone')}}：18854545xxx
    p {{ $t('kefu.email')}}：1738829654@qq.com
    p {{ $t('kefu.qq')}}：1738829654
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  mounted() {
    let thit = this;
    mui.back = function() { // 监听返回按钮返回到登录页面
      thit.$router.push({path: '/home'})
    }
  },
}
</script>

<style lang="scss" scoped>
.backImg{
  width: 0.24rem;
  height: 0.53rem;
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
.section{
  width: 100%;
  height: auto;
  .title{
    font-size: 0.48rem;
    color: #333333;
    margin-left: 0.7rem;
    text-align: left;
    margin-top: 1rem;
    font-weight: bold;
  }
  p{
    margin-left: 0.7rem;
    color: #666666;
    font-size: 0.426rem;
    text-align: left;
    margin-top: 0.56666rem;
  }
}
</style>


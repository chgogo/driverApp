<template lang="jade">
.margin 
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('main.name')}}
    span(class="sright", @click= "backhome()") {{ $t('main.suer')}}
  .section
    .early
      .eheader
        .text {{ $t('main.gengzao')}}
        .time 2017-01-11
      .econcat
        .listone
          .oneleft {{ $t('main.baoyangcar')}}
          .oneright 赣Au6489
        .listtwo
          .twoleft {{ $t('main.baoyangdian')}}
          .tworight 江西省南昌市东湖区途虎机械销售服务有限公司
        .listthree
          .threeleft {{ $t('main.baoyangneirong')}}
          .threeright
            span 更换空调滤芯
            span(class="s2") 更换发动机机油
            span(class="s3") 更换刹车片
    .early
      .eheader
        .text {{ $t('main.baoyangtime')}}
        .time 2017-01-11
      .econcat
        .listone
          .oneleft {{ $t('main.baoyangcar')}}
          .oneright 赣Au6489
        .listtwo
          .twoleft {{ $t('main.baoyangdian')}}
          .tworight 江西省南昌市东湖区途虎机械销售服务有限公司
        .listthree
          .threeleft {{ $t('main.baoyangneirong')}}
          .threeright
            span 更换空调滤芯
            span(class="s2") 更换发动机机油
            span(class="s3") 更换刹车片
    .early
      .nextMaintain
        .text {{ $t('main.baoyangouttime')}}
        .time 2017-01-11
</template>

<script type="text/javascript">
import headerall from '@/components/headerall';
export default {
  components: {
    headerall:headerall
  },
  data () {
    return {

    }
  },
  methods: {
    backhome() { // 点击确认按钮
      this.$router.push({path: "/home"})
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
  height: 100%;
  .early{
    width: 100%;
    .nextMaintain{
      width: 100%;
      height: 1.25rem;
      background: #eeeeee;
      display: flex;
      align-items: center;
      .text{
        width: 20%;
        font-size: 0.32rem;
        color: rgb(51, 51, 51);
        margin-left: 0.66666rem;
        text-align: center;
      }
      .time{
        font-size: 0.29rem;
        color: rgb(51, 51, 51);
        margin-left: 2.13333rem;
      }
    }
    .eheader{
      width: 100%;
      height: 1.25rem;
      background: #eeeeee;
      display: flex;
      align-items: center;
      .text{
        width: 20%;
        font-size: 0.32rem;
        color: rgb(51, 51, 51);
        margin-left: 0.66666rem;
        text-align: center;
      }
      .time{
        font-size: 0.29rem;
        color: rgb(51, 51, 51);
        margin-left: 2.13333rem;
      }
    }
    .econcat{
      width: 100%;
      height: auto;
      .listone,.listtwo,.listthree{
        display: flex;
        position: relative;
        .oneleft,.twoleft,.threeleft{
          color: rgb(153, 153, 153);
          font-size: 0.37rem;
          margin-left: 0.6666rem;
        }
        .oneright,.tworight,.threeright{
          color: rgb(51, 51,51);
          font-size: 0.37rem;
          margin-left: 2.13333rem;
          margin-right: 0.6666rem;
          position: absolute;
          left: 2.6rem;
        }
      }
      .listone{
        margin-top: 0.50rem;
      }
      .listtwo{
        margin-top: 0.50rem;
        .tworight{
          word-break: break-all;
          text-align: left;
          line-height: 0.32rem;
          line-height: 0.56rem;
        }
      }
      .listthree{
        margin-top: 1.16rem;
        height: 1.96rem;
        .threeright{
          display: flex;
          flex-direction: column;
          span{
            text-align: left;
          }
          .s2,.s3{
            margin-top: 0.26666rem;
          }
        }
      }
    }
  }
}
</style>

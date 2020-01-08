<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('parking.name')}}
    span(class="sright", @click= "backhome()") {{ $t('login.suer')}}
  .section
    .parkinglot( style= "border-bottom: solid 0.026rem #999999;")
      span {{ $t('parking.park')}}：
      .newselect
        span() {{ parkingLot}}
    .carnumber
      span {{ $t('parking.parknum')}}：
      .numberbox
        .boxnum
          .text {{ spotNum }}
          img(src="@/assets/homeImg/datu.png")
        .boxtext() {{ $t('parking.parktext')}}
  // button( @click= "cc(35.4606699515, 106.7431640625, 39.8886651688, 116.4221191406)" )
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      down: false,
      indexid: 0,
      // index: [
      //   {
      //   indexid: 0,
      //   name: '北京万达广场'
      // },
      // {
      //   indexid: 1,
      //   name: "上海万达广场",
      // }],
      parkingLot: '', // 停车场
      spotNum: '', // 停车位
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.$http.get(this.baseUrl + 'app/driver/acquireParkingSpot').then((res)=>{
        this.parkingLot = res.data.data.parkingLot; // 停车场
        this.spotNum = res.data.data.spotNum; // 停车位
      })
    },
    downjinatou() {
      this.down = !this.down;
    },
    backhome() { // 确定按钮
      this.$router.push({path: '/home'});
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
.down{
  position: absolute;
  right: 0.4rem;
  top: 0rem;
  height: 0.8rem;
  img{
    width: 0.28rem;
    height: 0.32rem;
  }
}
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
  .parkinglot{
    width: 100%;
    height: 1.68rem;
    display: flex;
    align-items: center;
    span{
      font-size: 0.37rem;
      color: #333333;
      margin-left: 0.666666rem;
    }
    .newselect{
      margin-bottom: 0.2rem;
      input{
        font-size: 18px;
        height: 100%;
      }
      select{
        width: 6rem;
        height: 0.7rem;
        border: solid 0.026rem #999999;
        border-radius: 0.13rem 0.13rem 0.13rem 0.13rem;
        outline: none;
        margin-left: 0.2666rem;
        color: #999999;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding-left: 1.6rem;
        margin-bottom: 0.16rem;
        font-size: 0.32rem;
        background: #fff;
      }
    }
  }
  .carnumber{
    display: flex;
    margin-top: 0.666rem;
    span{
      font-size: 0.37rem;
      color: #333333;
      margin-left: 0.666666rem;
    }
    .numberbox{
      margin-left: 1.22rem;
      margin-top: 0.2rem;
      .boxnum{
        width: 3.49rem;
        height: 4.72rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .text{
          font-size: 1.2rem;
          color: #40c6fe;
        }
        img{
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
        }
      }
      .boxtext{
        font-size: 0.42rem;
        color: #c1e9fd;
        margin-top: 0.56rem;
      }
    }
  }
}
</style>

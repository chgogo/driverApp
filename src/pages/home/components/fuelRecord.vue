<template lang="jade">
.main
  .header
    router-link(to="/home", tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('fule.name')}}
    span(class="sright" , @click= "backhome()") {{ $t('fule.suer')}}
  searchmap( v-on:chlidvalnew="childByValue")
  .footer
    .text
      p {{ $t('fule.jiayou')}}
      .ipt
        input( v-model = "oilLiters", type= "number")
        span /L
    .text
      p {{ $t('fule.money')}}
      .ipt
        input( v-model = "oilAmount")
        span /L
    .text
      p {{ $t('fule.gongli')}}
      .ipt
        input( v-model = 'mileage')
        span /km
  citylink
</template>

<script type="text/javascript">

import searchmap from '@/components/searchgooglemap';
export default {
  components: {
    searchmap: searchmap,
  },
  data () {
    return {
      address: '',
      oilLiters: '',
      oilAmount: '',
      mileage: '',
    }
  },
  methods: {
    childByValue: function (childValue) {
      console.log(childValue);
      this.address = childValue.name; // 子组件传过来的值
    },
    backhome() {
      this.$http.post( this.baseUrl + 'app/vehicle/tray/check/addVehicleOil', {
        vehicleCode: localStorage.getItem('vehicleCode'), // 车辆code
        oilStation: this.address, // 加油站
        oilLiters: this.oilLiters, // 加油量
        oilAmount: this.oilAmount, // 金额
        mileage: this.mileage, // 里程
      }).then( (res) => {
        if(res.status == 200){
          this.$router.push({path: '/home'})
        }
      })
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
.backImg{
  width: 0.24rem;
  height: 0.53rem;
}
.footer{
  margin-top: 20px;
  display: flex;
  .text{
    width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
      font-size: 0.37rem;
      color: rgb(51, 51, 51);
      text-align: left;
      margin-left: -0.5rem;
    }
    .ipt{
      input{
        margin-top: 0.3rem;
        width: 1.89rem;
        height: 0.53rem;
        border: solid 1px rgb(102, 102, 102);
        border-radius: 0.16rem 0.16rem 0.16rem 0.16rem;
        outline: none;
        text-align: center;
      }
      span{
        margin-left: 5px;
      }
      font-size: 0.37rem;
      color: rgb(102, 102, 102);
    }
  }
}
</style>

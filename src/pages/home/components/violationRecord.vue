<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('vio.name')}}
    span(class="sright", @click= "backhome()") {{ $t('vio.suer')}}
  .section
    .cell( style='border-bottom: solid 0.026rem #eeeeee;')
      .title
        img( src="@/assets/homeImg/lansekuang.png")
        .text {{ $t('vio.viotime')}}
    .cell( style='border-bottom: solid 0.026rem #eeeeee;')
      .hui(@click=" datatime()")
        .huileft( v-if='newdata') {{ timestampToTime(newdata) }}
        .huileft( v-else) {{ $t('vio.time')}}
        .kong
        .huiright()
          img( src="@/assets/homeImg/xiangxai.png",v-show="down1")
          img( src="@/assets/homeImg/jiantou.png",v-show="!down1")
      mt-datetime-picker( ref="picker",type="datetime", @confirm= "yeartime",v-model="nowTime",:confirmText="$t('login.suer')",:cancelText="$t('login.cancel')")
    .bor
    .cell( style='border-bottom: solid 0.026rem #eeeeee;')
      .title
        img( src="@/assets/homeImg/lansekuang.png")
        .text {{ $t('vio.vioaddress')}}
    .cell( style='border-bottom: solid 0.026rem #eeeeee;')
      .hui
        .huileft {{ $t('vio.guojia')}}
        .kong
        .huiright(@click= "downmenu()")
          img( src="@/assets/homeImg/xiangxai.png",v-show="down")
          img( src="@/assets/homeImg/jiantou.png",v-show="!down")
    mt-picker( :slots = 'slots', @change=" onvaluechange", value-key="name")
    .cell( style='border-bottom: solid 0.026rem #eeeeee;')
      .details
        span {{ $t('vio.detailsaddres')}}
        input(type="text", v-model="detailed")
    .bor
    .cell( style='border-bottom: solid 0.026rem #eeeeee;')
      .footer
        span {{ $t('vio.leibie')}}
        input( v-model= "violationType", type="text")
    .cell( style='border-bottom: solid 0.026rem #eeeeee;')
      .footer
        span {{ $t('vio.jine')}}
        input( v-model= "violationFine", type="number")
</template>

<script type="text/javascript">       
export default {
  data () {
    return {
      up: false,
      down: false,
      down1: false,
      down2: false,
      violationType: '',
      violationFine: '',
      newdata: '', // 年月日
      newtime: '', // 时分秒
      newloction: '', // 地址
      detailed: '', // 详细地址
      nowTime: '',
      slots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: [],
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot6"
        },
        {
          flex: 1,
          values: [],
          className: "slot7",
          textAlign: "center"
        },
      ],
    xian: '',
    newshi: '',
    ting: '',
    cun: '', 
    }
  },
  methods: {
    downmenu() {
      //console.log(this.up)
      this.down = !this.down;
      if(this.up === false){
        this.$refs.down.style.height = 5.333 + 'rem';
        return this.up = true;
      } else {
        this.$refs.down.style.height = 0;
        return this.up = false;
      }  
    },
    datatime() { // 年月日
      this.nowTime = new Date();
      this.$refs.picker.open();
      this.down1 = true;
    },
    yeartime(e){ // 年月日的回掉
      let newdata = e;
      this.newdata = newdata;
      this.down1 = false;
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + '';
      var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + '';
      var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
      return Y+M+D+h;
    },
    backhome() { // 点击确认按钮
      let data = {
        vehicleCode: localStorage.getItem( 'vehicleCode'),
        violationLocation: this.newloction + this.detailed, // 地址
        violationTime: this.newdata,
        violationType: this.violationType,
        violationFine: parseInt(this.violationFine),
      }
      this.$http.post( this.baseUrl + 'app/vehicle/tray/check/addVehicleViolation', data ).then( (res) => {
        if( res.status == 200 ){
          this.$router.push({path: '/home'})
        }
      })
    },
    citydata() { // 城市数据
      this.$http.get( this.baseUrl + '/base/data/acquireBaseFourLevelDataList',).then( (res) => {
        let newcity = res.data.data;
        console.log(newcity)
        this.slots[0].values = newcity; // 给县赋值
        this.newshi = newcity[0].childBaseFourLevelDataList; // 市数据
        this.ting = this.newshi[0].childBaseFourLevelDataList; // 盯的数据
        this.cun = this.ting[0].childBaseFourLevelDataList; // 村的数据
        console.log(this.newshi,this.ting,this.cun)
      })
    },
    onvaluechange(picker, values) { // 城市回调
      picker.setSlotValues(1, values[0].childBaseFourLevelDataList)
      picker.setSlotValues(2, values[1].childBaseFourLevelDataList)
      picker.setSlotValues(3, values[2].childBaseFourLevelDataList)
      this.$nextTick( () => {
        console.log(values[1].name,values[2].name,values[3].name);
        let xiandata = values[0].name;
        let shidata = values[1].name;
        let tingdata = values[2].name;
        let cundata = values[3].name;
        this.newloction  = `${ xiandata }${ shidata }${ tingdata }${ cundata }`;
      })
    }
  },
  mounted() {
    let thit = this;
    this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
      this.slots[0].values.defaultIndex = 0;
      // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      // 因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    });
    mui.back = function() { // 监听返回按钮返回到登录页面
      thit.$router.push({path: '/home'})
    }
  },
  created() {
    this.citydata();
  }
}
</script>

<style lang="scss" scoped>
.picker[data-v-5cb750b9] {
  overflow: hidden;
  margin-top: -56px;
}
*{
  touch-action: none;
  margin: 0;
  padding: 0;
}
.downmenu{
  width: 100%;
  height: 0;
  background: #eeeeee;
  transition: height 1s;
  -moz-transition: height 1s;	/* Firefox 4 */
  -webkit-transition: height 1s;	/* Safari 和 Chrome */
  -o-transition: height 1s;	/* Opera */
}
.bor{
  width: 100%;
  height: 0.18rem;
  background: #eeeeee;
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
  display: flex;
  flex-direction: column;
  .cell{
    width: 100%;
    height: 1.04rem;
    line-height: 1.04rem;
    .title{
      display: flex;
      align-items: center;
      img{
        margin-left: 0.666rem;
        width: 0.08rem;
        height: 0.42rem;
      }
      .text{
        font-size: 0.37rem;
        color: rgb(51, 51, 51);
        margin-left: 0.26666rem;
      }
    }
    .hui{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .huileft{
        font-size: 0.37rem;
        color: rgb(153, 153, 153);
        margin-left: 0.666rem;
      }
      .huiright{
        display: flex;
        align-items: center;
        margin-right: 0.64rem;
      }
    }
    .details{
      display: flex;
      align-items: center;
      span{
        font-size: 0.37rem;
        color: rgb(153, 153, 153);
        margin-left: 0.666rem;
      }
      input{
        width: 5.333rem;
        height: auto;
        border: none;
        outline: none;
        font-size: 0.37rem;
        color: rgb(153, 153, 153);
      }
    }
    .footer{
      display: flex;
      align-items: center;
      span{
        width: 50%;
        font-size: 0.37rem;
        color: rgb(102, 102, 102);
        // margin-left: 0.666rem;
      }
      input{
        width: 6.8rem;
        height: 0.8rem;
        outline: none;
        border-radius: 0.13rem;
        border: solid 1px rgb(153, 153, 153);
        padding-left: 0.26rem;
        font-size: 0.37rem;
      }
    }
  }
}
</style>

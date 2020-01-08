<template lang="jade">
.main
  .header
    router-link(to="/receipt",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('carriage.name')}}
    span(class="sright")
  .section
    .titlemessage
      .title
        img(src="@/assets/homeImg/touxiang@2x.png", class="tou")
        span {{ loadingContactName }}
        a(:href="`tel:${ loadingContactPhone }`",class="phone")
          img(src="@/assets/homeImg/dianhua@2x.png", )
      .message
        .messone
          .meesleft
            span {{ $t('carriage.quhuoaddres')}}
          .messright
            p {{containerAddress }}
            //- p(class="p2") 科技大厦105xxx路
        .messone
          .meesleft
            span {{ $t('carriage.songhuoaddres')}}
          .messright
            p {{ terminal }}
            //- p(class="p2") 天猫大厦105xxx路
  .newmain
    #maps
  .othermessage 
    .othertitle
      img(src= "@/assets/homeImg/lansekuang@2x.png")
      span {{ $t('carriage.othermess')}}
    .otherconcat
      .concatone
        span(class= "textone") {{ $t('carriage.guizhong')}}
        span(class= "texttwo") {{ containerServiceType }}
      .concatone
        span(class= "textone") {{ $t('carriage.guixin')}}
        span(class= "texttwo") {{ containerType }}
      .concatone
        span(class= "textone") {{ $t('carriage.guinum')}}
        span(class= "texttwo") {{ containerQuantity }}
      .concatone
        span(class= "textone") {{ $t('carriage.guitime')}}
        span(class= "texttwo") {{ timestampToTime(needTime) }}
      .concatone
        span(class= "textone") {{ $t('carriage.overguitime')}}
        span(class= "texttwo") {{ timestampToTime(finishTime) }}
      .concatone
        span(class= "textone") 预计时间
        span(class= "texttwo") {{ time }}
      .concatone
        span(class= "textone") 公里数
        span(class= "texttwo") {{ gongli }}
  .stars(class="star-phone",@click.stop="clickRating",v-if="customerEvaluationData != null")
    div(v-for="(item, index) in starNum",:key="index", :class="isRating(index)", :data-index="index")
  //- .bgImg
  //-   //- img(v-for="(star,index) in stars", :src="star.src", alt="星星图片",:key="index")
  //-   img( src= "@/assets/homeImg/star@2x.png")
  //-   img( src= "@/assets/homeImg/star@2x.png")
  //-   img( src= "@/assets/homeImg/star@2x.png")
  //-   img( src= "@/assets/homeImg/star@2x.png")
  //-   img( src= "@/assets/homeImg/star@2x.png")
</template>

<script type="text/javascript">
import google from "google";
// import baidumap from '@/components/routegooglemap';
// let starOffImg = './static/Images/star02@2x.png' // 空心星星
// let starOnImg = './static/Images/star@2x.png' // 实心星星
export default {
  // components: {
  //   baidumap: baidumap,
  // },
  props: {
    starNum: {
      // 星星的个数
      type: Number,
      default: 5
    },
    defaultRating: {
      // 默认点亮的个数
      type: Number,
      default: 4
    },
    outIndex: {
      // 外界传进来的一个标识
      type: Number,
      default: 0
    },
    readOnly: {
      // 是否是只读，默认不是，拥有点击功能
      type: Boolean,
      // default: false,
      default: true,
    }
  },
  data () {
    return {
      rating: this.defaultRating, // 用于控制点亮星星的个数
      newidx: 2,
      terminal: '',
      containerAddress: '',
      terminalLon: '',
      terminalLat: '',
      containerAddressLon: '',
      containerAddressLat: '',
      containerServiceType:　'',
      containerType: '',
      containerQuantity: '',
      needTime: '',
      finishTime: '',
      customerEvaluationData: '',
      driverScore: '',
      loadingContactName: '',
      loadingContactPhone: '',

      gongli: '', // 公里数
      time: '', // 路线时间
    }
  },
  mounted() {
    let thit = this;
    this.load();
    mui.back = function() { // 监听返回按钮返回到登录页面
      thit.$router.push({path: '/receipt'})
    }
  },
  created() {
    // this.load();
  },
  methods: {
    timestampToTime(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      var h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m;
    },
    isRating(index) {
      ++index;
      return index <= this.rating ? "star-item star-active" : "star-item";
    },
    clickRating(ev) {
      if (this.readOnly) {
        return;
      }
      let mark = parseInt(ev.target.dataset.index) + 1;
      this.rating = mark;
      // this.$emit('starMarkChange', mark, this.outIndex)
    },
    load() {
      this.$http.get(this.baseUrl + 'order/acquireOrderDetailByCode/' + this.$route.query.code).then( (res) => {
        console.log(res);
        let newdata = res.data.data;
        this.terminal = newdata.terminal; // 取货地点
        this.terminalLon = newdata.terminalLon; // 取柜地点的经度
        this.terminalLat = newdata.terminalLat; // 取柜地点的纬度
        this.containerAddress = newdata.containerAddress; // 装柜地点
        this.containerAddressLon = newdata.containerAddressLon; // 装柜地点的经度
        this.containerAddressLat = newdata.containerAddressLat; // 装柜地点的纬度
        this.containerServiceType = newdata.containerServiceType; //　柜种
        this.containerType = newdata.containerType; // 柜型
        this.containerQuantity = newdata.containerQuantity; // 要柜数量
        this.needTime = newdata.needTime; // 要柜时间
        this.finishTime = newdata.finishTime;  // 完成装柜时间

        this.customerEvaluationData = newdata.customerEvaluationData; // 评价对象
        this.loadingContactName = newdata.loadingContactName;
        this.loadingContactPhone = newdata.loadingContactPhone;
        if(this.customerEvaluationData != null ){
          console.log(this.rating)
          this.rating = newdata.customerEvaluationData.driverScore; // 司机评分
        }
        console.log(this.containerAddress,this.terminal)
        let initAddr = { lat: this.containerAddressLon, lng: this.containerAddressLat };
        let destAddr = { lat: this.terminalLat, lng: this.terminalLon};
        // let initAddr = { lat: 34.4, lng: 135.3 };
        // let destAddr = { lat: 35.42, lng: 139.46 };
        // let initAddr = this.containerAddress;
        // let destAddr = this.terminal;
        console.log(initAddr,destAddr)
        let map = new google.maps.Map(document.getElementById("maps"), {
          center: destAddr,
          scrollwheel: false,
          zoom: 18,
          zoomControl:false,
          scaleControl:false,
          streetViewControl:false,
          overviewMapControl:false,
          rotateControl:false,
          mapTypeControl:false,
          panControl:false,
        });
        let directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });
        // Set destination, origin and travel mode.
        let request = {
          origin: initAddr, // 起点
          destination: destAddr, // 终点
          travelMode: google.maps.TravelMode.DRIVING // 运输的方式
        };
        let thit = this
        // Pass the directions request to the directions service.
        let directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(result, status) {
          if (status == "OK") {
            thit.gongli = result.routes[0].legs[0].distance.text;
            thit.time = result.routes[0].legs[0].duration.text;
            // Display the route on the map.
            directionsDisplay.setDirections(result);
          }
        });
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  #maps {
    width: 100%;
    height: 6.6rem;
  }
}
.star-phone {
  position: relative;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
}
.star-item {
  display: inline-block;
  width: 0.88rem;
  height: 0.58rem;
  background-image: url("../../../assets/homeImg/kongxin@2x.png");
  background-size: 0.6rem 0.6rem;
  background-clip: content-box;
  background-position: center 0;
  background-repeat: repeat-y;
  cursor: pointer;
  vertical-align: bottom;
  white-space: nowrap;
}
.star-item:last-child {
  padding-right: 0;
}
.star-active {
  background-position: center 3rem;
  background-image: url("../../../assets/homeImg/xin@2x.png");
  background-size: 0.6rem 0.6rem;
}
.bgImg{
  text-align: center;
}
.footer{
  width: 100%;
  height: 50px;
  background: rgb(65, 198, 254);
  margin-top: 0.266rem;
  span{
    color: rgb(255, 255, 255);
    font-size: 0.37rem;
    height: 1.333rem;
    line-height: 1.333rem;
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
.titlemessage{
  margin-top: 0.6rem;
  padding-bottom: 0.5rem;
  .title{
    display: flex;
    position: relative;
    align-items: center;
    border-bottom: solid 1px #ccc;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
    padding-bottom: 0.2rem;
    span{
      color: rgb(102, 102, 102);
      font-size: 0.37rem;
      margin-left: 0.26rem;
    }
    .tou{
      width: 0.85rem;
      height: 0.85rem;
      border-radius: 50%;
      margin-left: 0.53rem;
    }
    .phone{
      width: 0.85rem;
      height: 0.85rem;
      border-radius: 50%;
      position: absolute;
      right: 0.8rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .message{
    width: 100%;
    margin-top: 0.48rem;
    .messone{
      margin-top: 0.26rem;
      display: flex;
      align-items: center;
      .meesleft{
        margin-left: 0.8rem;
        span{
          font-size: 0.37rem;
          color: rgb(153, 153, 153);
        }
      }
      .messright{
        margin-left: 1rem;
        p{
          text-align: left;
          color: rgb(102, 102, 102);
          font-size: 0.37rem;
          margin-top: 0.26rem;
        }
      }
    }
  }
}
.othermessage{
  margin-top: 0.6rem;
  padding-bottom: 0.5rem;
  .othertitle{
    display: flex;
    position: relative;
    align-items: center;
    border-bottom: solid 1px #ccc;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
    padding-bottom: 0.2rem;
    img{
      width: 0.08rem;
      height: 0.45rem;
      margin-left: 0.2rem;
    }
    span{
      color: rgb(51, 51, 51);
      font-size: 0.42rem;
      margin-left: 0.3rem;
    }
  }
  .otherconcat{
    width: 100%;
    margin-top: 0.53rem;
    .concatone{
      display:  flex;
      margin-top: 0.53rem;
      .textone{
        width: 100px;
        text-align: left;
        font-size: 0.37rem;
        color: rgb(153, 153, 153);
        margin-left: 0.5rem;
      }
      .texttwo{
        color: rgb(102, 102, 102);
        font-size: 0.37rem;
        margin-left: 1.25rem;
      }
    }
  }
}
</style>

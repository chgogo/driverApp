<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('acc.name')}}
    span(class="sright" , @click = "backhome()") {{ $t('acc.suer')}}
  .section
    .cell( style="border-bottom: solid 0.026px #eeeeee;")
      .title
        img( src="@/assets/homeImg/lansekuang.png")
        .text {{ $t('acc.acctime')}}
    .cell( style="border-bottom: solid 0.026px #eeeeee;")
      .hui
        .huileft( v-if="datetime") {{ timestampToTime(datetime)}}
        .huileft( v-else) {{ $t('acc.time')}}
        .kong
        .huiright(@click=" datatime()")
          img( src="@/assets/homeImg/xiangxai.png", v-show="down1")
          img( src="@/assets/homeImg/jiantou.png", v-show="!down1")
      mt-datetime-picker( ref="picker",type="datetime" @confirm= "yeartime",v-model="nowtime",:confirmText="$t('login.suer')",:cancelText="$t('login.cancel')")
    .bor
    .cell( style="border-bottom: solid 0.026px #eeeeee;")
      .title
        img( src="@/assets/homeImg/lansekuang.png")
        .text {{ $t('acc.accaddress')}}
    searchmap( @chlidvalnew="childByValueTwo")
    .bor
    .cell( style="border-bottom: solid 0.026px #eeeeee;")
      .footer
        span {{ $t('acc.baoanhao')}}
        input(class="mtinput", v-model= 'reportNum', type="text")
    .cell( style="border-bottom: solid 0.026px #eeeeee;")
      .footer
        span {{ $t('acc.leibei')}}
        input(v-model= "violationType", type="text")
    .cell( style="border-bottom: solid 0.026px #eeeeee;")
      // .hui
      //   select(@change = 'downjinatou()', v-model= 'indexid',)
      //     option( value='',disabled selected hidden) 责任
      //     option( v-for = "item in index", :value= "item.indexid", name= "item.name",) {{item.name}}
      //   .down()
      //     img( src="@/assets/homeImg/xiangxai.png", v-show="down")
      //     img( src="@/assets/homeImg/jiantou.png", v-show="!down")
      .newselect
        span {{ $t('acc.zheren')}}
        select(@change = 'downjinatou()', v-model= 'responsible',)
          // option(value= '', disabled selected hidden) 责任
          option( v-for = "item in index", :value= "item.indexid", name= "item.name") {{item.name}}
    .cell( style="border-bottom: solid 0.026px #eeeeee;")
      // .hui
      //   .huileft 处理方式
      //   .huiright()
      //     img( src="@/assets/homeImg/xiangxai.png",v-show="down")
      //     img( src="@/assets/homeImg/jiantou.png",v-show="!down")
      .newselectTwo
        span {{ $t('acc.fangshi')}}
        select(@change = 'downjinatou()', v-model= 'handling',)
          option( v-for = "item in indexTwo", :value= "item.indexid", name= "item.name") {{item.name}}
    .uploadImg
      p {{ $t('acc.photo')}}
    uploadImages( @childByValue="childByValue")
</template>
<script type="text/javascript">
import searchmap from '@/components/searchgooglemap';
import uploadImages from '@/components/uploadImages';
export default {
  components: {
    searchmap: searchmap,
    uploadImages: uploadImages,
  },
  data () {
    return {
      address: '',
      up: false,
      down: false, // 下拉菜单
      down1: false,
      down2: false,
      indexid: 0,
      violationType: '',
      reportNum: '',
      handling: 1,
      responsible: 1,
      ImgUrl: '',
      datetime: '', // 日期
      newarr: [],
      itemarr: [],
      index: [
        {
          indexid: 1,
          name: '对方全责'
        },
        {
          indexid: 2,
          name: '我方全责',
        },
        {
          indexid: 3,
          name: '双方责任'
        }
      ],
      indexTwo: [
        {
          indexid: 1,
          name: '私了'
        },
        {
          indexid: 2,
          name: '公了',
        },
      ],
      nowtime: '',
    }
  },
  methods: {
    timestampToTime(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + '';
      var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + '';
      var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
      return Y+M+D+h;
    },
    childByValueTwo: function (childValue) { //子组件传过来的地址
      this.address = childValue.name;
    },
    childByValue (childValue) { // 子组件传过来的图片
      this.ImgUrl = childValue;
      this.newarr.push(this.ImgUrl);
    },
    downmenu() {
      this.down = !this.down;
      if(this.up === false){
        this.$refs.down.style.height = 5.333 + 'rem';
        return this.up = true;
      }else{
        this.$refs.down.style.height = 0;
        return this.up = false;
      }  
    },
    datatime() { // 年月日
      this.nowtime = new Date();
      this.down1 = true;
      this.$refs.picker.open();
    },
    yeartime(e){ // 年月日的回掉
      this.down1 = false;
      this.datetime = e;
    },
    backhome() { // 点击确认按钮
      this.$router.push({path: '/home'});
      let that = this;
      this.newarr.forEach(function(item,idx){
        let itemVal = 'http://192.168.1.127:8085/pic_file/' + item;
        that.itemarr.push(itemVal);
      })
      console.log( this.itemarr)
      let data = {
        vehicleCode: localStorage.getItem( 'vehicleCode'),
        accidentTime: this.datetime,
        accidentSite: this.address,
        reportNum: this.reportNum,
        violationType: this.violationType,
        responsible: this.responsible,
        handling: this.handling,
        imgUrlList: this.itemarr,
      }
      this.$http.post( this.baseUrl + 'app/driver/addVehicleAccident', data ).then( (res) => {
        
      })
    }, 
    downjinatou() {

    },
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
.newselect{
  position: relative;
  display: flex;
  span{
    width: 25%;
    font-size: 0.37rem;
    color: rgb(51, 51, 51);
    margin-left: 0.66666rem;
  }
  select{
    width: 7.1rem;
    height: 0.8rem;
    border: solid 0.026rem #999999;
    border-radius: 0.13rem 0.13rem 0.13rem 0.13rem;
    outline: none;
    // margin-left: 0.75rem;
    color: #999999;
    padding-left: 2.6rem;
    margin-bottom: 0.16rem;
    font-size: 0.32rem;
    background: #fff;
    margin-top: 0.1rem;
  }
  .down{
    position: absolute;
    right:0;
    top: 0rem;
    height: 0.8rem;
  img{
    width: 0.28rem;
    height: 0.32rem;
  }
  }
}
.newselectTwo{
  position: relative;
  display: flex;
  span{
    width: 25%;
    font-size: 0.37rem;
    color: rgb(51, 51, 51);
    margin-left: 0.66666rem;
  }
  select{
    width: 7.1rem;
    height: 0.8rem;
    border: solid 0.026rem #999999;
    border-radius: 0.13rem 0.13rem 0.13rem 0.13rem;
    outline: none;
    margin-left: 0.1rem;
    color: #999999;
    padding-left: 2.6rem;
    margin-bottom: 0.16rem;
    font-size: 0.32rem;
    background: #fff;
    margin-top: 0.1rem;
  }
  .down{
    position: absolute;
    right:0;
    top: 0rem;
    height: 0.8rem;
    img{
      width: 0.28rem;
      height: 0.32rem;
    }
  }
}
.uploadImg{
  width: 100%;
  height: 1.04rem;
  line-height: 1.04rem;
  p{
    font-size: 0.37rem;
    color: rgb(102, 102, 102);
    margin-left: 0.666rem;
    text-align: left;
  }
}
.downmenu{
  width: 100%;
  height: 0px;
  background: #eeeeee;
  transition: height 1s;
  -moz-transition: height 1s;	/* Firefox 4 */
  -webkit-transition: height 1s;	/* Safari 和 Chrome */
  -o-transition: height 1s;	/* Opera */
}
// .mtinput{
//   margin-left: 0.34rem;
// }
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
        width: 25%;
        font-size: 0.37rem;
        color: rgb(102, 102, 102);
        margin-left: 0.666rem;
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

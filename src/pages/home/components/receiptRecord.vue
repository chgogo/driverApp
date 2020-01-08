<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('receipt.name')}}
    span(class="sright")
  .section
    .concat( v-for="(item,idx) in newdata" , @click ='toSeedatails(item.orderCode)')
      .concatTitle
        .time
          span(class= "newdata") {{newtime}}
          //- span(class= "newtime") 12:30
        .state
          span {{ $t('receipt.wancheng')}}
      .concatText
        .Rightbox()
          .xxbox
            .Rightline
              //- img(src="@/assets/homeImg/dian-hui@2x.png",class="pie")
              //- img(src="@/assets/homeImg/dian-lv@2x.png",class="pieTwo")
              //- img(src="@/assets/homeImg/dian-lv@2x.png",class="pieTwo")
              //- img(src="@/assets/homeImg/dian-lv@2x.png",class="pieTwo")
              img(src="@/assets/homeImg/dian@2x.png")
            .RightText
              .dressTop {{ item.startAddress }}
              .dressBtm {{ item.endAddress}}
          //- .xxbox
          //-   .Rightline
          //-     img(src="@/assets/homeImg/dian-hong.png",class="pieNew")
          //-   .RightText
          //-     .dressTop 海南市-海口
          //-     .dressBtm 丰台大街国贸广场104xx号
        .po {{ $t('receipt.zhuanggui')}}
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      newdata: '',
      newtime: '',
    }
  },
  methods: {
    toSeedatails(code) { // 点击进入查看详情
      console.log(code);
      this.$router.push({ path: '/seedatails', query:{ code: code}});
      // this.$router.go(0);
    },
    load(){
      let code = localStorage.getItem('code')
      this.$http.get(this.baseUrl + 'app/order/acquireOrderRecordForDriver/' + code ).then( (res)=>{
        this.newdata = res.data.data;
        this.newdata.forEach( (item,idx) => {
          this.newtime = this.timeFormat(item.createTime);
          console.log(this.newdata[idx].orderCode);
          this.ordercode = item.orderCode;
        });
      })
    },
    timeFormat(timestamp){
      //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
      var time = new Date(timestamp);
      var year = time.getFullYear();
      var month = time.getMonth()+1;
      var date = time.getDate();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      return year+'-'+month+'-'+date+' '+ hours+':'+minutes+':'+seconds;
    }
  },
  mounted() {
    let thit = this;
    mui.back = function() { // 监听返回按钮返回到登录页面
      thit.$router.push({path: '/home'})
    }
  },
  created() {
    this.load()
  }
}
</script>

<style lang="scss" scoped>
.po{
  position: absolute;
  right: 0.29rem;
  top: 0.42rem;
  font-size: 0.32rem;
  color: #e4a53f; 
}
.green{
  position: absolute;
  right: 0.29rem;
  top: 0.42rem;
  font-size: 0.32rem;
  color: #55e83d; 
}
.blue{
  position: absolute;
  right: 0.29rem;
  top: 0.42rem;
  font-size: 0.32rem;
  color: #758dea; 
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
  .concat{
    .concatTitle{
      width: 100%;
      height: 1.17rem;
      background: #eeeeee;
      line-height: 1.17rem;
      position: relative;
      .time{
        color: #666666;
        font-size: 0.29rem;
        position: absolute;
        left: 0;
        .newdata{
          margin-left: 0.2666rem;
        }
        .newtime{
           margin-left: 0.37rem;
        }
      }
      .state{
        position: absolute;
        right: 0.266666rem;
        height: 100%;
        display: flex;
        align-items: center;
        span{
          color: #40c6fc;
          font-size: 0.42rem;
        }
      }
    }
    .concatText{
      width: 100%;
      height: 1.5rem;
      padding-bottom: 0.42rem;
      position: relative;
    }
  }
}
.xxbox{
  width: 5.3rem;
  display: flex;
}
.Rightbox{
  display: flex;
  flex-direction: column;
  margin-top: 0.42rem;
  margin-left: 0.69rem;
  .Rightline{
    width: 1px;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-left: 0.266rem;
    img{
      width: 0.21rem;
      height: 1.06rem;
    }
  }
  .RightText{
    padding-left: 0.2666rem;
    padding-top: 0.1666rem;
    .dressTop{
      text-align: left;
      font-size: 0.29rem;
      color: rgb(102, 102, 102);
    }
    .dressBtm{
      text-align: left;
      font-size: 0.29rem;
      color: rgb(153, 153, 153);
      margin-top: 0.266rem;
      }
    }
  }
</style>

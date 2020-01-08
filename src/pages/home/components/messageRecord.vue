<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('message.name')}}
    span(class="sright", @click= "homeback()") {{ $t('message.suer')}}
  .section
    .titletype
      select(@change = 'downjinatou()', v-model= 'type')
        option( v-for = "item in index", :value= "item.indexid", name= "item.name") {{item.name}}
      .down()
        img( src="@/assets/homeImg/xiangxia---jiantou@2x.png", v-show="down")
        img( src="@/assets/homeImg/jiantou@2x.png", v-show="!down")
    searchmap(v-if="showmap")
    .other
      p {{ $t('message.qita')}}
      textarea(cols="40", rows="6",class="newtext", v-model="textail")
</template>

<script type="text/javascript">
import baidumap from '@/components/baidumap';
import searchmap from '@/components/trafficLayergooglemap';
export default {
  components: {
    baidumap: baidumap,
    searchmap: searchmap,
  },
  data () {
    return {
      down: false,
      textail: '',
      showmap: true,
      type: 1,
      index: [
        {
        indexid: 0,
        name: this.$t('message.mess'),
      },
      {
        indexid: 1,
        name: this.$t('message.duche'),
      }]
    }
  },
  methods: {
    downjinatou() {
      this.down = !this.down;
      let newtype = this.type;
      if( newtype === 0){
        return this.showmap = false;
      }else{
        return this.showmap = true;
      }
    },
    homeback() { // 点击确认按钮
      let data = {
        userCode: localStorage.getItem( 'code'),
        type: this.type,
        information: this.textail,
      }
      this.$http.post( this.baseUrl + 'app/driver/addInformationRecord', data ).then( (res) => {
        console.log(res)
        if( res.status == 200 ){
          this.$router.push({path: "/home"});
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
.baidumap{
  margin-top: 0.2666rem;  
}
.other{
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  font-size: 0.37rem;
  margin-left: 0.69rem;
  p{
    text-align: left;
    color: rgb(102, 102, 102)
  }
  textarea{
    margin-top: 0.26666rem;
    border-radius: 5px;
    border: solid 1px rgb(102, 102, 102);
    outline: none;
    margin-right: 0.53rem;
    height: 2.65rem;
    font-size: 0.37rem;
  }
}
.down{
  position: absolute;
  right: 0.2rem;
  top: 0rem;
  height: 1.2rem;
  line-height: 1.2rem;
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
.titletype{
  height: 1.2rem;
  position: relative;
  margin-left: 0.36rem;
  margin-right: 0.36rem;
  margin-bottom: 0.26rem;
  select{
    width: 100%;
    height: 1.2rem;
    outline: none;
    border: none;
    margin-left: 0.2rem;
    border-bottom: solid 1px #ccc;
    // padding-left: 0.2rem;
    // padding-right: 0.2rem;
    color: rgb(153, 153, 153);
    background: #fff;
    font-size: 0.37rem;
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
  }
}
</style>

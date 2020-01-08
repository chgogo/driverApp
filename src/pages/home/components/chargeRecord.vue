<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span {{ $t('charge.name')}}
    span(class="sright", @click= "backhome()") {{ $t('charge.suer')}}
  searchmap(v-on:chlidval="childByValue")
  .footer
    .up( @click= "upspeed", v-if="down") {{ $t('charge.up')}}
      img(src="@/assets/homeImg/lanseyuanann@2x.png",class="upgao")
    .down( @click= "downspeed", v-if="up") {{ $t('charge.down')}}
      img(src="@/assets/homeImg/baiseyuananniu@2x.png",class="downgao")
</template>

<script type="text/javascript">
import searchmap from '@/components/loctiongooglemap';
import { MessageBox } from 'mint-ui';
export default {
  components: {
      searchmap: searchmap,
  },
  data () {
    return {
      datetime: '',
      effected_at: '',
      uplong: '',
      uplat: '',
      long: '',
      lat: '',
      newcode: '',
      up: false,
      down: true,
    }
  },
  methods: {
    childByValue(val) { // 子组件传过来的经纬度
      console.log(val);
      this.long = val.lng;
      this.lat = val.lat;
    },
    upspeed() { // 上高速
      this.gettime();
      this.dateTime();
      // if(navigator.geolocation){ // 获取经纬度
      //   navigator.geolocation.getCurrentPosition( (position) => {
      //     this.uplong = position.coords.longitude;  
      //     this.uplat = position.coords.latitude;
      //   });
      // }
      // let newlong = localStorage.getItem( 'nextlong');
      // let nextlat = localStorage.getItem('nextlat');
      let data = {
        code: '',
        userCode: localStorage.getItem( 'code'),
        vehicleCode: localStorage.getItem( 'vehicleCode'),
        highSpeedEntrance: "", // 高速入口
        highSpeedEntranceTime: this.effected_at,
        highSpeedEntranceLon: this.long, // 高数进站口经纬度
        highSpeedEntranceLat: this.lat,
        highSpeedExit: "", // 高速出口
        highSpeedExitTime: '',
        highSpeedExitLon: 0, // 高速出站口
        highSpeedExitLat: 0,
      }
      MessageBox.confirm(this.$t('charge.shang')).then(action => {
        this.$http.post(this.baseUrl + 'app/driver/inHighSpeed', data).then( ( res ) => {
          if( res.data.rlt == true){
            MessageBox(this.$t('charge.tishi'), this.$t('charge.yishang'));
            this.newcode = res.data.data.code;
            localStorage.setItem('speed', 1);
            this.up = true;
            this.down = false;
          }
        })
      });
    },
    downspeed() { // 下高速
      this.gettime();
      this.dateTime();
      let nextlong = localStorage.getItem( 'nextlong');
      let nextlat = localStorage.getItem('nextlat');
      // if(navigator.geolocation){ // 获取经纬度
      //     navigator.geolocation.getCurrentPosition( (position) => {
      //       this.long = position.coords.longitude;  
      //       this.lat = position.coords.latitude;
      //     });
      // }
      let data = {
        code: this.newcode,
        userCode: localStorage.getItem( 'code'),
        vehicleCode: localStorage.getItem( 'vehicleCode'),
        highSpeedEntrance: "",
        highSpeedEntranceTime: '',
        highSpeedEntranceLon: 0,
        highSpeedEntranceLat: 0,
        highSpeedExit: "",
        highSpeedExitTime:  this.effected_at,
        highSpeedExitLon: this.long,
        highSpeedExitLat: this.lat,
      }

      MessageBox.confirm(this.$t('charge.xia')).then(action => {
        this.$http.post( this.baseUrl + 'app/driver/outHighSpeed', data).then( ( res) => {
          if( res.data.rlt){
            this.up = false;
            this.down = true;
            localStorage.setItem('speed', 2);
            MessageBox(this.$t('charge.tishi'), this.$t('charge.yixia'));
            this.newcode = "";
          }
        })
      })
    },
    dateTime() {
      var effected_at = new Date(Date.parse(this.datetime.replace(/-/g, "/")));
      var effected_at  = effected_at.toISOString();
      this.effected_at = effected_at;
    },
    gettime() {
	    var date = new Date();
	    var year = date.getFullYear();
	    var month = date.getMonth()+1;
	    var day = date.getDate();
	    var hours=date.getHours();
	    var minutes=date.getMinutes();
	    var seconds=date.getSeconds();
      this.datetime = `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`;
    },
    backhome() { // 确认按钮
      this.$router.push({path: '/home'})
    },
  },
  mounted() {
    let thit = this;
    mui.back = function() { // 监听返回按钮返回到登录页面
      thit.$router.push({path: '/home'})
    }
  },
  created() {
    if(localStorage.getItem('speed') == 1){
      this.up = true;
      this.down = false;
    } else {
      this.up = false;
      this.down = true;
    }
  }
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
.footer{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 1.666rem;
  .up{
    width: 2.74rem;
    height: 2.74rem;
    font-size: 0.48rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    img{
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      z-index: -1;
    }
  }
  .down{
      width: 2.74rem;
      height: 2.74rem;
      font-size: 0.48rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(67, 199, 254);
      img{
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        z-index: -1;
      }
  }
}
</style>

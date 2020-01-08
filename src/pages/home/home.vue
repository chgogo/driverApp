<template lang="jade">
.mian
  .showModel( ref="showmodel")
    v-touch(@swipeleft = 'moveleft()', class ='popup', tag=  'div')
      .pheade
        div( @click="badge", type="error", size="small", class='mt-bedgemoude', v-show="remind") 1
        .headtitle
          img(src="@/assets/homeImg/tou.png")
          .username
            .name {{ driverName }}
            .tishi {{ $t('home.prompttext')}}
      .pconcat
        router-link( to= "/receipt", tag= "div", class="list")
          img(src= "@/assets/homeImg/jiedanjilu@2.png")
          span {{ $t('home.jiedanjilu')}}
        router-link( to= "/customer", tag= "div", class="list")
          img(src= "@/assets/homeImg/kefu@2.png")
          span {{ $t('home.kefu')}}
        // router-link( to= "/", tag= "div", class="list")
        //   img(src= "@/assets/homeImg/kefu@2.png")
        //   span {{ $t('home.ribao')}}
        div(class="list", @click="appupload")
          img(src= "@/assets/homeImg/upload.jpg")
          span {{ $t('login.upload')}}
        router-link( to="/set", class="list", tag="div")
          img(src= "@/assets/homeImg/shezhi.jpg")
          span 设置
        div(class="list", @click="outlogin")
          img(src= "@/assets/homeImg/tuichui@2.png")
          span {{ $t('home.outlogin')}}
    div( class="uploadmode" v-show="uploadmode")
      div( class='model')
        div( @click='hiddenupda', class="x") x
        .title 1.1.0 版
        // .concat
        //   p QAQ 已经是最新版本了~~
        .concat
          p
            span 1， 
            优化代码。
          p 
            span 2， 
            更新新功能。
          p
           span 3，
           加载速度优化。
        button 确认更新
    v-touch(@swipeleft = 'moveleft()', class ='hui', tag=  'div')
  header
    div( @click="badge", type="error", size="small", class='mt-bedge', v-show="remind") 1
    // 任务一
    .work( v-if= "shownext1", ref ="work")
      img( v-if="language == 'zh'",src = '../.././assets/homeImg/shangban@2x.png', @click= "matousuer1()",)
      img( v-if="language == 'jp'",src = '../.././assets/homeImg/dianhushangbanJP.png', @click= "matousuer1()",)
      img( v-if="language == 'en'",src = '../.././assets/homeImg/dianhushangbanEN.png', @click= "matousuer1()",)
      //- img( :src= `{{ $t('home.shangban')}}`)
    .worktwo(v-if= 'shownext2')
      img( v-if="language == 'zh'", src ='@/assets/homeImg/xiaban@2x.png', @click= "gooffwork()")
      img( v-if="language == 'jp'", src ='@/assets/homeImg/dianhuxiabanJP.png', @click= "gooffwork()")
      img( v-if="language == 'en'", src ='@/assets/homeImg/dianhuxiabanEN.png', @click= "gooffwork()")
      //- span 确认下班
    //- .workthree( v-if= 'shownext3', @click="matousuer3()")
    //-   img( src = '@/assets/homeImg/daomat@2x.png',)
    //- .workfore( v-if= 'shownext4', @click="matousuer4()")
    //-   img( src = '@/assets/homeImg/qugui2.png',)
    //- .work5( v-if= 'shownext5', @click="matousuer5()")
    //-   img( src = '@/assets/homeImg/kehuxainchang.png',)
    //- .work6( v-if= 'shownext6', @click="matousuer6()")
    //-   img( src = '@/assets/homeImg/usersuer.png',)
    //- .work7( v-if= 'shownext7', @click="matousuer7()")
    //-   img( src = '@/assets/homeImg/wancheng2.png',)
    //- // 任务二 多一个客户完成装柜
    //- .work8( v-if= 'shownext8', @click="matousuer8()") 
    //-   img( src = '@/assets/homeImg/kehuwc.png',)
    .dataTime
      span {{ daytime }}
    .userHead( @click = "showpopup()")
      img(src="@/assets/homeImg/tou.png")
  section
    .title
      span(class="titleImg")
        img(src="@/assets/homeImg/xiaoxi@2x.png")
      //- span(class="titleText") 
      marquee( direction="left", class='titleText') 由于受最近低温雨雪天气的影响，部分地区已经封路
    .task
      .taskLeft
        img(src="@/assets/homeImg/dangqianrengwu@2x.png",v-if="language == 'zh'")
        img(src="@/assets/homeImg/dangqianrenwuriwen.png",v-if="language == 'jp'")
        img(src="@/assets/homeImg/dangqianrenwuyingwen.png",v-if="language == 'en'")
      .taskRight( v-if = "xx")
        .Rightbox()
          .Rightline
            img(src="../.././assets/homeImg/dian-hui@2x.png",class="pie")
            img(src="../.././assets/homeImg/dian-lv@2x.png",class="pieTwo")
            img(src="../.././assets/homeImg/dian-lv@2x.png",class="pieTwo")
            img(src="../.././assets/homeImg/dian-lv@2x.png",class="pieTwo")
          .RightText( v-if ='details == false')
            span {{ $t('home.notask')}}
          .RightText
            .dressTop {{  newendAddress  }}
            .dressBtm {{  newstartAddres }}
        .positionBtn( @click = "seedetailss()", v-if="details") {{ $t('home.details')}}
      .taskRight( v-if = "!xx")
        .RightText
          span {{ $t('home.notask')}}
    .list
      ul
        router-link( to="/fuel")
          li(class="li1")
            img(src="@/assets/homeImg/jiayou@2x.png",v-if="language == 'zh'")
            img(src="@/assets/homeImg/jiayoujiluJP.png",v-if="language == 'jp'")
            img(src="@/assets/homeImg/jiayoujiluEN.png",v-if="language == 'en'")
        router-link( to="/maintain")
          li(class="li2")
            img(src="@/assets/homeImg/weibaojilu@2x.png",v-if="language == 'zh'")
            img(src="@/assets/homeImg/weibaojiluJP.png",v-if="language == 'jp'")
            img(src="@/assets/homeImg/weibaojiluEN.png",v-if="language == 'en'")
        router-link( to="/charge")
          li(class="li3")
            img(src="@/assets/homeImg/gaosushoufei@2x.png",v-if="language == 'zh'")
            img(src="@/assets/homeImg/gaosushoufeiJP.png",v-if="language == 'jp'")
            img(src="@/assets/homeImg/gaosushoufeiEN.png",v-if="language == 'en'")
        router-link( to="/parking")
          li(class="li4")
            img(src="@/assets/homeImg/tingche@2x.png",v-if="language == 'zh'")
            img(src="@/assets/homeImg/tingcheJP.png",v-if="language == 'jp'")
            img(src="@/assets/homeImg/tingcheEN.png",v-if="language == 'en'")
        router-link( to="/violation")
          li(class="li5")
            img(src="@/assets/homeImg/weizhangshangbao@2x.png",v-if="language == 'zh'")
            img(src="@/assets/homeImg/weizhangshangbaoJP.png",v-if="language == 'jp'")
            img(src="@/assets/homeImg/weizhangshangbaoEN.png",v-if="language == 'en'")
        router-link( to="/accident", )
          li(class="li6")
            img(src="@/assets/homeImg/shigushangbao@2x.png",v-if="language == 'zh'")
            img(src="@/assets/homeImg/shigushangbaoJP.png",v-if="language == 'jp'")
            img(src="@/assets/homeImg/shigushangbaoEN.png",v-if="language == 'en'")
        router-link( to="message", )
          li(class="li7")
            img(src="@/assets/homeImg/xinxishangbao@2x.png",v-if="language == 'zh'")
            img(src="@/assets/homeImg/xingxishangbaoJP.png",v-if="language == 'jp'")
            img(src="@/assets/homeImg/xinxishangbaoEN.png",v-if="language == 'en'")
        router-link( to="costreporting")
          li(class="li8")
            img(src="@/assets/homeImg/feiyong@2x.png",v-if="language == 'zh'")
            img(src="@/assets/homeImg/feiyongshangbaoJP.png",v-if="language == 'jp'")
            img(src="@/assets/homeImg/feiyongshangbaoEN.png",v-if="language == 'en'")
    //- searchmap
  //- footer( @click="gooffwork")
  //-   span 确认下班
</template>
<script type="text/javascript">
import { MessageBox } from 'mint-ui';
import { Button } from 'mint-ui';
import { Popup } from 'mint-ui'; // mintui 弹出框
import searchmap from '@/components/searchmap';
export default {
  components: {
    searchmap: searchmap,
  },
  data() {
    return {
      mapshow: false,
      daytime: '',
      effected_at: '',
      shownext1: true,
      shownext2: false,
      shownext3: false,
      shownext4: false,
      shownext5: false,
      shownext6: false,
      shownext7: false,
      shownext8: false,
      shownext9: false,
      xx: true,
      details: false,
      lat: '', // 纬度
      long: '', // 经度
      orderCode: this.$route.params.orderCode,
      newstartAddres: localStorage.getItem('startAddress'),
      newendAddress: localStorage.getItem( 'endAddress'),
      driverName: localStorage.getItem('driverName'),
      a: 11,
      newdata: localStorage.getItem('datatype'),
      language: localStorage.getItem('language'),
      locationlong: '',
      locationlat: '',
      phone: this.$route.query.phone,
      polong: null,
      polat: null,
      interval: null,
      timer: null,
      remind: true, // 更新功能没后台写的死数值根据数值判断提醒
      uploadmode: false,
    }
  },
  methods: {
    badge() {
      MessageBox('提示','请及时进行车辆检修')
    },
		// lunxun() {
		// 	if(navigator.geolocation){
		// 		let that = this;
		// 		navigator.geolocation.watchPosition( function(p){
    //       let heading = p.coords.heading;
		// 			let lat = p.coords.latitude;
		// 			let long =  p.coords.longitude;
		// 			let data = {
		// 				id: 0,
		// 				terminalPhone: that.phone,
		// 				latitude: lat,
		// 				longitude: long,
    //         direction: heading,
		// 			}
		// 			that.$http.post( that.locationUrl + 'position/addVehiclePosition', data).then( (res)=>{
		// 				console.log('获取经纬度' + '在前台')
		// 			}).catch( function( erro){
    //         console.log('erroooooooooooo')
    //       })
		// 		},function(erro){
    //       console.log('获取失败')
    //     },{ enableHighAcuracy: true,})
		// 	}
		// },
    showload() {
      if( localStorage.getItem('showstate') == 1) {
        this.shownext1 = false;
        this.shownext2 = true;
      } else if ( localStorage.getItem('showstate') == 2){
        this.shownext1 = true;
        this.shownext2 = false;
      }
    },
    matousuer1() {
      this.$router.push({path:'/calling'});
      this.shownext1 = false;
      this.shownext2 = true;
      this.xx = true;
      // this.shownext3 = false;
      // this.shownext4 = false;
      // this.shownext5 = false;
      // this.shownext6 = false;
      // this.shownext7 = false;
      // localStorage.removeItem('Marking7');
    },
    gooffwork(){ // 确认下班
    let thit = this;
      localStorage.setItem('showstate', 2);
      MessageBox.confirm(thit.$t('login.xiaban')).then(action => {
        this.shownext1 =  true;
        let data = {
          driverCode: localStorage.getItem('code'),
          orderCode: localStorage.getItem( 'orderCode' ),
          splitOrderType: localStorage.getItem('datatype'),
          address: '',
          addressLat: this.lat,
          addressLon: this.long,
          type: 10,
          status: 1,
          clockTime: this.effected_at,
        }
        this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
          if(res.data.rlt == true){
            this.shownext1 =  true;
            this.shownext2 = false;
            this.xx = false;
          }
        })
      })
    },
    gowork() {
      this.$router.push({path:'/calling'})
    },
    dateTime() { // 给后台传时间
      var effected_at = new Date(Date.parse(this.daytime.replace(/-/g, "/")));
      var effected_at  = effected_at.toISOString();
      this.effected_at = effected_at;
    },
    gettime() { // 时间
	    var date = new Date();
	    var year = date.getFullYear();
	    var month = date.getMonth()+1;
	    var day = date.getDate();
	    var hours = date.getHours();
	    var minutes = date.getMinutes();
	    var seconds = date.getSeconds();
      this.daytime = `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`;
    },
    getaddress() {  // 获取经纬度
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( function (position) {
          this.long = position.coords.longitude;
          this.lat = position.coords.latitude;
        })
      }
    },
    showpopup() {
      this.$refs.showmodel.style.left = 0;
    },
    seedetailss() { // 查看详情
      this.$router.push({ path: '/carriage'});
    },
    moveleft() {
      this.$refs.showmodel.style.left = -1100 + "px";
    },
    outlogin() { // 退出登录
      // console.log(localStorage.getItem('language'));
      let language = localStorage.getItem('language');
      let userName = localStorage.getItem('username');
      let passWord = localStorage.getItem('password');
      this.$router.push({ path: '/', query: { lang: language}});
      localStorage.clear();
      clearInterval(this.timer)
      localStorage.setItem('queryuserName', userName);
      localStorage.setItem('querypassWord', passWord);
    },
    appupload() {
      this.uploadmode = true;
    },
    hiddenupda() {
      this.uploadmode = false;
    },
    listenner() {
      let that = this;
      plus.geolocation.getCurrentPosition(function(pos){
        let heading = pos.coords.heading;
				let lat = pos.coords.latitude;
				let long =  pos.coords.longitude;
				let data = {
					id: 0,
					terminalPhone: that.phone,
					latitude: lat,
					longitude: long,
          direction: heading,
				}
				that.$http.post( that.locationUrl + 'position/addVehiclePosition', data).then( (res)=>{
					console.log('在后台获取到了经纬度')
				}).catch( function( erro){
          console.log('erroooooooooooo')
        })
      })
    },
    qian() {
      let that = this;
      plus.geolocation.getCurrentPosition(function(pos){
        let heading = pos.coords.heading; // 朝向
				let lat = pos.coords.latitude;
				let long =  pos.coords.longitude;
        console.log(heading)
				let data = {
					id: 0,
					terminalPhone: that.phone,
					latitude: lat,
					longitude: long,
          direction: heading,
				}
				that.$http.post( that.locationUrl + 'position/addVehiclePosition', data).then( (res)=>{
					console.log('在前台获取到了经纬度')
				}).catch( function( erro){
          console.log('erroooooooooooo')
        })
      })
    }
  },
  mounted() {
    this.showload();
    // 应用进入后台的时候
    let thit = this;
    let positionTime = parseInt(localStorage.getItem('positionTime'))
    let zhuzhu  = positionTime ||  60000;
    this.constTime = zhuzhu; // 动态设置定时器的时间
    console.log(this.constTime)
    document.addEventListener("pause", function() {
      // thit.interval = setInterval(thit.listenner(), 3000);
      window.clearInterval(thit.timer)
      thit.interval = setInterval(()=>{
        setTimeout(thit.listenner,0)
      },thit.constTime)
    });
    //回到前台监听器，添加回到程序运行的事件,清除监听器
    document.addEventListener("resume", function() {
      window.clearInterval(thit.interval);
      thit.timer = setInterval( ()=>{
        setTimeout(thit.qian,0)
      },thit.constTime)
    }, false);
    mui.back = function() { // 监听返回按钮返回到登录页面
      thit.$router.push({path: '/'})
    }
  },
  created() {
    this.timer = setInterval( ()=>{
      setTimeout(this.qian,0)
    },30000)
    // window.setInterval(() => {
    //   setTimeout(this.lunxun, 0)
    // }, 3000)
    if(localStorage.getItem('datatype')){
      this.details = true;
    }
    setInterval(()=> { // 显示的时间
			this.gettime()
    }, 1000)
    // let that = this;
    // document.addEventListener('visibilitychange', function(){
    //   if(document.visibilityState === "visible"){
    //     clearInterval(that.time)
    //   }
    //   if(document.visibilityState === "hidden"){
    //     console.log('hidden')
    //     navigator.geolocation.getCurrentPosition( function (position) {
    //     })
    //     window.setInterval(() => {
    //       setTimeout(function(){
    //         console.log('地理定位')
    //         navigator.geolocation.getCurrentPosition( function (position) {
    //         })
    //       }, 0)
    //     }, 6000)
        // if(navigator.geolocation){
        //   navigator.geolocation.watchPosition( function(p){
        //     console.log(p)
        //   }(),function(erro){
        //     console.log('erro')
        //   })
        // } else {
        //   console.log('无地址定位')
        // }
    //   }
    // })
  } 
}
</script>
<style lang="scss" scoped>
.uploadmode{
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,0.5);
  z-index: 5;
  .model{
    width: 75%;
    height: 6.66666rem;
    background: #fff;
    top: 40%;
    left: 10%;
    border-radius: 0.26rem;
    position: absolute;
    color: #33c2ff;
    padding: 0.26rem;
    .x{
      text-align: right;
      font-size: 0.6666rem;
    }
    .title{
      font-size: 0.53rem;
      font-weight: bold;
      color: #000;
    }
    .concat{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0.26rem;
      margin-top: 0.26rem;
      p{
        font-size: 0.426rem;
        color: #000;
        text-align: left;
        margin-top: 0.36rem;
        span{
          font-weight: bold;
        }
      }
    }
    button{
      background: #33c2ff;
      border: none;
      outline: none;
      border-radius: 0.26rem;
      width: 3.2rem;
      height: 1.06666rem;
      color: #fff;
      position: absolute;
      bottom: 0.6rem;
      left: 2.7rem;
      font-size: 0.37rem;
    }
  }
}
.mt-bedge{
  width: 0.53rem;
  height: 0.53rem;
  position: absolute;
  left: 1.12rem;
  top: 1.54rem;
  z-index: 2;
  background: red;
  color: #fff;
  border-radius: 50%;
  font-size: 0.42rem;
  line-height: 0.53rem;
}
.mt-bedgemoude{
  width: 0.666rem;
  height: 0.666rem;
  position: absolute;
  left: 1.46rem;
  top: 1.97rem;
  z-index: 2;
  background: red;
  color: #fff;
  border-radius: 50%;
  font-size: 0.42rem;
  line-height: 0.666rem;
}
footer{
  width: 100%;
  height: 50px;
  background: #41c6fe;
  margin-top: 0.26rem;
  span{
    color: #fff;
    font-size: 0.47rem;
  }
}
.mian{
  position: relative;
}
.Rightbox{
  width: 100%;
  display: flex;
}
.pheade{
  width: 100%;
  height: 7.3rem;
  background: url( "../.././assets/homeImg/beijintu.png") no-repeat;
  background-size:  100% 100%;
  position: relative;
  .headtitle{
    display: flex;
    position: absolute;
    top: 1rem;
    left: 0.5rem;
    img{
      width: 1.70rem;
      height: 1.70rem;
      border-radius: 50%;
    }
    .username{
      display: flex;
      flex-direction: column;
      font-size: 0.32rem;
      justify-content: center;
      margin-left: 0.2666rem;
      color: #fff;
      .name{
        text-align: left;
        font-size: 0.42rem;
        font-weight: bold;
      }
      .tishi{
        text-align: left;
        margin-top: 0.2666rem;
      }
    }
  }
}
.pconcat{
  .list{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 0.9666rem;
    img{
      width: 0.64rem;
      height: 0.58rem;
      margin-left: 0.466rem;
    }
    span{
      color: #333333;
      font-size: 0.4rem;
      margin-left: 0.2666rem;
    }
  }
}
.showModel{
  position: absolute;
  width: 100%;
  height: 100%;
  left: -1100px;
  top: 0;
  z-index: 88;
  transition: all 0.5s;
  display: flex;
  .popup{
    width: 73%;
    height: 100%;
    background: #fff;
  }
  .hui{
    width:  27%;
    height: 100%; 
    background: rgba(0, 0, 0, 0.5);
  }
}
header{
  width: 100%;
  height: 7.3rem;
  background: url("../.././assets/homeImg/BG-lan@2x.png");
  background-size: 100% 100%;
  position: relative;
  .work{
    width: 2.66666rem;
    height: 2.6666rem;
    top: 2.6666rem;
    left: calc(50% - 1.3033rem);
    position: absolute;
    z-index: 10;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .worktwo{
    width: 2.66666rem;
    height: 2.6666rem;
    top: 2.6666rem;
    left: calc(50% - 1.3033rem);
    position: absolute;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .userHead{
    width: 1.3rem;
    height:  1.3rem;
    position: absolute;
    top: 0.8666rem;
    left: 0.3666rem;
    border-radius: 50%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .dataTime{
    position: absolute;
    bottom: 0.66666rem;
    left: calc(50% - 1.5033rem);
    span{
      color: rgb(255, 255, 255);
      font-size: 0.34rem;
    }
  }
}
section{
  width: 100%;
  height: 100%;
  .title{
    width: 100%;
    height: 1.333rem;
    display: flex;
    align-items: center;
    background: rgb(249, 250, 252);
    .titleImg{
      margin-left: 0.5rem;
      // height: 1.06rem;
      // line-height: 1.06rem;
      display: flex;
      align-items: center;
      img{
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    .titleText{
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.36rem;
      color: rgb(255, 104, 7);
      margin-left: 0.3rem;
      margin-top: 0.1rem;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      height: 1.06rem;
      line-height: 1.06rem;
    }
  }
  .task{
    width: 100%;
    height: 2.6666rem;
    margin-top: 0.26rem;
    display: flex;
    .taskLeft{
      width: 2rem;
      height: 2.666rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .taskRight{
      margin-left: 0.26666rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .Rightline{
        width: 1px;
        display: flex;
        flex-direction: column;
        align-items:center;
        margin-left: 0.266rem;
        .pie{
          width: 0.21rem;
          height: 0.21rem;
          margin-top: 0.25rem;
        }
        .pieTwo{
          width: 0.053rem;
          margin-top: 0.18rem;
        }
      }
      .RightText{
        padding-left: 0.2666rem;
        padding-top: 0.2666rem;
        span{
          font-size: 0.39rem;
          color: rgb(102, 102, 102);
          margin-left: 0.26rem;
        }
        .dressTop{
          text-align: left;
          font-size: 0.29rem;
          color: rgb(102, 102, 102);
        }
        .dressBtm{
          font-size: 0.29rem;
          color: rgb(153, 153, 153);
          margin-top: 0.166rem;
          text-align: left;
        }
      }
      
    }
  }
}
.positionBtn{
  width: 2rem;
  height: 0.8rem;
  border-radius:  0.36rem 0.36rem 0.36rem 0.36rem;
  position: absolute;
  top: 10.88rem;
  left: 7.82rem;
  background: rgb(65, 198, 254);
  color: #fff;
  font-size: 0.29rem;
  justify-content: center;
  line-height: 0.8rem;
  text-align: center;
  font-weight: bold;
}
.list{
  width: 100%;
  margin-top: 0.266rem;
  ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0.24rem;
    padding-right: 0.24rem;
    li{
      width: 2.26rem;
      height: 2.666rem;
      margin-top: 0.266rem;
      box-shadow: 0rem 0rem 0.21rem red($color: #818181);
      border-radius: 0.186rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .li1,.li2,.li3,.li5,.li6,.li7{
      margin-right: 0.16rem;
    }
  }
}
</style>

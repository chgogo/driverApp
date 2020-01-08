<template lang="jade">
.main(ref="main")
  #apply.login
    .title
      p(class="pone") {{$t('login.welcome')}}
      p(class="ptwo")  E-NLP
    .loding
      .username
        span {{$t('login.username')}}
        .zh
          input(type= "number", v-model= "username")
        .writeline
      .password
        span {{$t('login.password')}}
        .mima
          input(type= "password", v-model= "password" , @focus= "scroll")
        .writeline
      .lofooter
        p
          label()
            input( type="checkbox", v-model="rmbUsername", @change='changename')
          span {{ $t('login.rmbuser')}}
        p
          label
            input( type="checkbox", v-model="rmbPasswora")
          span {{ $t('login.rmbpass')}}
    .newlogin
      span(@click="logins()") {{ $t('login.signin')}}
    .swith
      select( @change="changeLanguage()", v-model='lanvalue')
        //- option( @click='changeLanguage("zh")') 中文
        //- option( @click='changeLanguage("jp")') 日本語
        //- option( @click='changeLanguage("en")') English
        option( v-for="item in langlist", :value="item.val") {{item.name }}
    // p
    //   a(href="http://mp.weixin.qq.com/mp/getmasssendmsg?__biz=MzIxNDU0Mjg5OQ==#wechat_redirect") 跳转到微信公众号历史文章页
    .instructionBook( @click='instructionBook')
      span {{ $t('explain.explain')}}
</template>

<script type="text/javascript">
import { MessageBox } from 'mint-ui';
import  $ from  'jquery';
export default {
  data () {
    return {
      username: '',
      password: '',
      windowHeight: window.screen.availHeight, // 移动端可视区高度
      langlist:[{
        name: '中文',
        val: 'zh',
      },{
        name: '日本語',
        val: 'jp',
      },{
        name: 'English',
        val: 'en',
      }],
      lanvalue: 'jp',
      lang: this.$route.query.lang,
      rmbUsername: true,
      rmbPasswora: true,
    }
  }, 
  methods: {
    instructionBook() { // 软件说明书
      this.$router.push('/instructionbook')
    },
    changename() {
    },
    changeLanguage() {
      this.$i18n.locale = this.lanvalue;
      localStorage.setItem("language", this.lanvalue);
    },
    zhuce() { // 注册
      this.$router.push({ path:'/register'})
      localStorage.setItem('RegisterState', 2)
    },
    wangji() { //　忘记密码
      this.$router.push({ path:'/forgetpassword'})
      localStorage.setItem('RegisterState', 1)
    },
    scroll() {
      let main = this.$refs.main;
      let newHeight = window.screen.availHeight;
      // console.log(this.windowHeight < newHeight );
      main.style.height = 20 + 'rem';
    },
    logins() { // 验证用户名和密码不能为空存到本地存储里面
      if(this.username === '' || this.username === null){
        MessageBox(this.$t('login.tishi'), this.$t('login.duiuser'));
        return
      } else if (this.password === '' || this.password === null){
        MessageBox(this.$t('login.tishi'), this.$t('login.duipass'));
        return
      }
      let newname = this.username;
      let newpass = this.password;
      if( this.rmbUsername == true) { // 记住账号
        let localuser = localStorage.setItem('username', newname);
        // this.username = localuser;
      } else {
        localStorage.removeItem('username')
      }
      if( this.rmbPasswora == true) { // 记住密码
        let localuser = localStorage.setItem('password', newpass);
        // this.username = localuser;
      } else {
        localStorage.removeItem('password')
      }
      let That = this;
      // let imel = plus.device.imei ? plus.device.imei: ''; // 手机设备的序列号
      // let newimel = imel.split(',')
      // // imei:newimel[0]
      // 传值到后台
      this.$http.post(  `${ this.baseUrl }app/driver/driverLogin`, { userName: this.username, password: this.password}).then(function (res) {
        if(res.data.rlt === true){
          localStorage.setItem('code', res.data.data.code); // code
          localStorage.setItem('vehicleCode', res.data.data.vehicleCode); // 车辆code
          localStorage.setItem('licensePlate', res.data.data.licensePlate); // 车牌号
          localStorage.setItem('driverName', res.data.data.name); // 司机名称
          // localStorage.setItem('language','zh');
          let phone = res.data.data.phone;
          That.$router.push({path: "/home", query:{ phone: phone}});
          // location.reload();
        } else {
          MessageBox(That.$t('login.tishi'),That.$t('login.erro'));
          // MessageBox( '提示', '账号或密码错误');
        }
      }).catch(function (error) {
        console.log(error);
      })
    },
    getItem() { // 记住账号密码
      // if(document.localStorage !== ''){
      //   let newuser = localStorage.getItem( 'username');
      //   let newpass = localStorage.getItem( 'password');
      //   this.username = newuser;
      //   this.password = newpass;
      // }
      let queryuserName = localStorage.getItem('queryuserName');
      let querypassWord = localStorage.getItem('querypassWord');
      console.log(queryuserName, querypassWord)
      this.username = queryuserName;
      if( querypassWord === 'null') {
        this.password = '';
      }else {
        this.password = querypassWord;
      }
    }
  },
  mounted() {
    this.getItem();
    localStorage.setItem('language', this.lang || 'jp')
  },
  created() {
    // if(  this.lang === undefined){
    //   console.log(222)
    // }
    // console.log(this.lang)
    // if( this.lanvalue)
    // console.log(localStorage.getItem('language'))
    this.lanvalue = this.langlist[1].val;
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( function (position) {})
    }
    // location.reload();
  },
}
</script>

<style lang="scss" scoped>
.instructionBook{
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  span{
    font-size: 0.4rem;
    color: #fff;
  }
}
input[type="checkbox"]{
  width:  15px;
  height: 15px;
    -webkit-appearance: none;
    vertical-align:middle;
    margin-top:0;
    background:#fff;
    border:#999 solid 1px;
    border-radius: 3px;
    min-height: 16px;
    min-width: 16px;
    position: relative;
    border: none;
    outline: none;
    
}
input[type="checkbox"]:checked {
    background: #4ABFFF;
    border: none;
    outline: none;
}
input[type=checkbox]:checked::after{
    content: '';
    top: 4px;
    left: 4px;
    position: absolute;
    background: transparent;
    border: #fff solid 2px;
    border-top: none;
    border-right: none;
    height: 4px;
    width: 7px;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
option{
  border: none;
  outline: none;
}
.swith{
  position: absolute;
  top: 0.8rem;
  right: 0.66rem;
  width: 2.13rem;
  height: 0.8rem;
  line-height: 0.8rem;
  overflow: hidden;
  background-color: #4ABFFF;
  display: flex;
  select{
    color: #fff;
    border: none;
    padding-left: 0.26rem;
    width: 2.13rem;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 0.32rem;
    option{
      border: none;
      outline: none;
      background-color: #4ABFFF;
    }
  }
}
.focusState {position: absolute;}
.newlogin{
  margin-top: 2.5rem;
  position: absolute;
  left: 3.01rem;
  span{
    display: block;
    height: 1.39rem;
    line-height: 1.39rem;
    width: 4.08rem;
    color: #fff;
    font-size: 0.48rem;
    // background: url("../.././assets/homeImg/lijidenglu@2x.png") no-repeat;
    background: #4ABFFF;
    border-radius: 10rem;
    background-size: 100% 100%;
  }
}
.login{
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url( "../.././assets/homeImg/ditu@2x.png") no-repeat;
  background-size:  100% 100%;
  .title{
    margin-left: 0.8rem;
    padding-top: 2.6rem;
    .pone{
      font-size: 0.8rem;
      font-family: 苹方特粗;
    }
    .ptwo{
      margin-top: 0.373rem;
      font-size: 0.53rem;
      font-family: 粗体;
    }
    p{
      text-align: left;
      color: #fff;
    }
  }
}
.loding{
  margin-left: 0.8rem;
  margin-top: 1.81rem;
  .username{
    text-align: left;
    span{
      color: #fff;
      font-size: 0.48rem;
      z-index: 999;
    }
    .zh{
      margin-top: 0.666rem;
      width: 6.4rem;
      height: 0.64rem;
      font-size: 0.48rem;
      z-index: 999;
      input{
        width: 100%;
        height: 0.8rem;
        font-size: 0.37rem;
        outline: none;
        z-index: 66;
        background: rgba(0,0,0,0,);
        color: #fff;
        padding-left: 0.2rem;
        z-index: 999;
      }
    }
    .writeline{
      width: 6.6rem;
      height: 1px;
      background: #fff;
    }
  }
  .lofooter{
    width: 6.4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 0.46rem;
    p{
      display: flex;
      align-items: center;
      input{
        margin-left: 0.2rem;
      }
      span{
        font-size: 0.38rem;
        color: #fff;
        margin-left: 0.16rem;
      }
    }
  }
  .password{
    text-align: left;
    margin-top: 0.906rem;
    position: relative;
    .forgetsmima{
      position: absolute;
      right: 2.746rem;
      bottom: -0.6666rem;
      color: #fff;
      font-size: 0.48rem;
    }
    span{
      color: #fff;
      font-size: 0.48rem;
    }
    .mima{
      margin-top: 0.666rem;
      width: 6.4rem;
      height: 0.64rem;
      font-size: 0.48rem;
      input{
        width: 100%;
        height: 0.8rem;
        font-size: 0.48rem;
        outline: none;
        z-index: 66;
        background: rgba(0,0,0,0,);
        color: #fff;
        padding-left: 0.2rem;
      }
    }
    .writeline{
      width: 6.6rem;
      height: 1px;
      background: #fff;
    }
  }
}
</style>

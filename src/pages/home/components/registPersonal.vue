<template lang="jade">
.main
  .header
    router-link(to="/register",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span 个人注册
    span(class="sright")
  .section
    .title
      .wecom 欢迎进入
      .wename 和盛兴行物流平台
    .concat
      .concatitem
        .itemtitle
          img( src="@/assets/homeImg/xingming@2x.png")
          span 姓名
        .itemipt
          input(  placeholder="请输入你的姓名", type="text", v-model="name")
      .concatitem
        .itemtitle
          img( src="@/assets/homeImg/gongsi@2x.png")
          span 公司名称
        .itemipt
          input(  placeholder="请输入公司名称", type="text", v-model="companyname")
      .concatitem
        .itemtitle
          img( src="@/assets/homeImg/dizi@2x.png")
          span 地址
        .itemipt
          input(  placeholder="请输入地址", type="text", v-model="address")
      .concatitem
        .itemtitle
          img( src="@/assets/homeImg/iphone@2x.png")
          span 电话/手机号
        .itemipt
          input(  placeholder="请输入电话手机号", type="number", v-model="iPhone",)
      .concatitem
        .itemtitle
          img( src="@/assets/homeImg/youxiang@2x.png")
          span 邮箱
        .itemipt
          input(  placeholder="请输入邮箱", type="text", v-model="mailbox")
      .concatitem
        .itemtitle
          img( src="@/assets/homeImg/yanzhenma@2x.png")
          span 验证码
        .itemipt
          input(  placeholder="请输入邮箱验证码", type="text", v-model="vercode")
          .fa(@click="countdown") 发送验证码
          .text() 还剩 {{ totalTime }} 秒
      .concatitem
        .itemtitle
          img( src="@/assets/homeImg/shuchuhaoma@2x.png")
          span 输出入者登录号码
        .itemipt
          input(  placeholder="请输入输出入者登录号码", type="text", v-model="loginNum")
      .concatitem
        .itemtitle
          img( src="@/assets/homeImg/mima@2x.png")
          span 密码
        .itemipt
          input(  placeholder="请设置您的密码", type="password", v-model="password",)
      .concatitem
        .itemtitle
          img( src="@/assets/homeImg/mima@2x.png")
          span 再次输入密码
        .itemipt
          input(  placeholder="请重新设置您的密码", type="password", v-model="newpassword",)
    .logon( @click="logon")
      span 注册
</template>

<script type="text/javascript">
import { MessageBox } from 'mint-ui';
import { type } from 'os';
export default {
  data () {
    return {
      name: '',
      companyname: '',
      address: '',
      iPhone: '',
      mailbox: '',
      totalTime: 10,
      Timeinterval: null,
      canClick: true,
      vercode: '',
      loginNum: '',
      password: '',
      newpassword: '',
      type: this.$route.query.type,
      verification: '',
    }
  },
  methods: {
    logon() {
      let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); // 邮箱验证
      let passwordreg = new RegExp("^(?![A-Za-z]+$)(?![A-Z\\d]+$)(?![A-Z\\W]+$)(?![a-z\\d]+$)(?![a-z\\W]+$)(?![\\d\\W]+$)^[a-zA-Z0-9!#*_]{6,16}$"); // 密码包含三种以上
      let passwordregx = new RegExp('(?!^([0-9]+|[a-zA-Z]+|[!#*_]+)$)^[a-zA-Z0-9!#*_]{6,16}$'); //密码包含两种以上
      if( this.name == ''){
        MessageBox('提示','请输入名称')
      } else if( this.companyname == ''){
        MessageBox('提示','请输入公司名称')
      } else if( this.address == ''){
        MessageBox('提示','请输入地址')
      } else if( this.iPhone == ''){
        MessageBox('提示','请输入电话号手机号')
      } else if(this.iPhone.length < 11){
        MessageBox('提示','请输入正确的手机号')
      } else if( !(/^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/.test(this.iPhone))){
        MessageBox('提示','手机格式有误')
      } else if( this.mailbox == ''){
        MessageBox('提示', '请输入邮箱')
      } else if( !reg.test( this.mailbox)){
        MessageBox('提示','邮箱格式不正确')
      } else if( this.vercode == ''){
        MessageBox('提示','请输入邮箱验证码')
      } else if( this.loginNum == ''){
        MessageBox('提示','请输入输入者登录号码')
      } else if( this.password == ''){
        MessageBox('提示','请输入密码')
      } else if ( !passwordregx.test( this.password)){
        MessageBox('提示','请输入6-16位大、小写字母、数字或特殊字符(!#*_)，必须至少包含其中两种类型')
      } else if( this.newpassword == ''){
        MessageBox('提示','请重新输入密码')
      } else if( this.password != this.newpassword){
        MessageBox('提示','两次密码输入不一致')
      } else {
        console.log('注册')
        let data = {
          userName: this.mailbox,
          customerName: this.name,
          contactPhone: this.iPhone,
          address: '',
          detailAddress: this.address,
          type: this.type, // 公司和个人
          companyName: this.companyname,
          inputNumber: this.loginNum,
          password: this.newpassword,
          verificationCode: this.verification,
        }
        this.$http.post( this.baseUrl + '/customer/customerRegistered',data).then( (res) => {
          if( res.data.rlt == true){
            console.log( '注册已成功')
            MessageBox('提示','注册成功')
            this.$router.push('/')
          }else{
            console.log( '账号已经存在')
            MessageBox('提示', '账号已存在')
          }
        })
      }
    },
    countdown() {
      if (!this.canClick) return;
      let state = localStorage.getItem('RegisterState')
        this.$http.get(this.baseUrl + '/customer/sendVerification/' + this.mailbox +'/'+ state).then( (res) => {
        console.log(res.data.data)
        let newvercode = res.data.data;
        this.verification  = newvercode;
      })
      this.canClick =  false;
      let that = this;
      this.Timeinterval = setInterval(() => {
        this.totalTime -- ;
        if( this.totalTime < 0){
          clearInterval(this.Timeinterval);
          this.totalTime = 10;
          this.canClick = true;
        }
      }, 1200);
    }
  },
  beforeDestroy() {

  }
}
</script>

<style lang="scss" scoped>
.section{
  width: 100%;
  .title{
    width: 100%;
    margin-top: 1.333rem;
    .wecom{
      margin-left: 0.77rem;
      font-weight: bold;
      font-size: 0.78rem;
      color: rgb(0, 0, 0);
      text-align: left;
    }
    .wename{
      font-size: 0.53rem;
      margin-left: 0.77rem;
      margin-top: 0.5rem;
      color: rgb(0, 0, 0);
      text-align: left;
    }
  }
  .logon{
      width: 100%;
      margin-top: 2.24rem;
      display: flex;
      justify-content: center;
      margin-bottom: 2.6rem;
      span{
        width: 3.89rem;
        height: 1.3rem;
        text-align: center;
        line-height: 1.39rem;
        border-radius: 4rem;
        background: #41c6fe;
        color: #fff;
        display: block;
        font-size: 0.38rem;
      }
    }
  .concat{
    width: 100%;
    margin-top: 0.96rem;
    .concatitem{
      width: 70%;
      margin-left: 1.49rem;
      border-bottom: solid 1px rgb(51, 51, 51);
      padding-bottom: 0.48rem;
      margin-top: 0.4rem;
      .itemtitle{
        text-align: left;
        img{
          width: 0.34rem;
          height: 0.34rem;
        }
        span{
          font-size: 0.37rem;
          color: rgb(51, 51, 51);
          margin-left: 0.26rem;
          font-weight: bold;
        }
      }
      .itemipt{
        text-align: left;
        margin-top: 0.42rem;
        position: relative;
        input{
          width: 70%;
          border: none;
          outline: none;
          font-size: 0.37rem;
          margin-left: 0.6rem;
        }
        .fa{
          position: absolute;
          width: 2.16rem;
          height: 0.74rem;
          border: solid  0.026rem rgb(51, 51, 51);
          border-radius: 0.36rem;
          font-size: 0.37rem;
          text-align: center;
          line-height: 0.74rem;
          z-index: 66;
          right: 0.26rem;
          top: 0.2rem;
        }
        .text{
          font-size: 0.27rem;
          position: absolute;
          right: -1.2rem;
          bottom: 0.14rem;
        }
      }
    }
  }
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
</style>

<template lang="jade">
.main
  .header
    router-link(to="/",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span 忘记密码
    span(class="sright")
  .section
    .title
      .wecom 欢迎进入
      .wename 和盛兴行物流平台
    .concat
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
          img( src="@/assets/homeImg/mima@2x.png")
          span 新密码
        .itemipt
          input(  placeholder="请输入新密码", type="password", v-model="newpassword")
      .concatitem
        .itemtitle
          img( src="@/assets/homeImg/mima@2x.png")
          span 确认新密码
        .itemipt
          input(  placeholder="请输入新密码", type="password", v-model="oldpassword")
      .logon( @click="logon")
        span 确认
</template>

<script type="text/javascript">
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      mailbox: '',
      newpassword: '',
      totalTime: 10,
      vercode: '',
      canClick: true,
      verification: '',
      oldpassword: '',
    }
  },
  methods: {
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
      }, 1000);
    },
    logon() {
      let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); // 邮箱验证
      let passwordreg = new RegExp("^(?![A-Za-z]+$)(?![A-Z\\d]+$)(?![A-Z\\W]+$)(?![a-z\\d]+$)(?![a-z\\W]+$)(?![\\d\\W]+$)^[a-zA-Z0-9!#*_]{6,16}$"); // 密码包含三种以上
      let passwordregx = new RegExp('(?!^([0-9]+|[a-zA-Z]+|[!#*_]+)$)^[a-zA-Z0-9!#*_]{6,16}$'); //密码包含两种以上
      if( this.mailbox == '' ) {
        MessageBox('提示', '请输入邮箱')
      } else if ( !reg.test( this.mailbox)) {
        MessageBox('提示', '邮箱格式不正确')
      } else if ( !passwordregx.test( this.newpassword) ) {
        MessageBox('提示','请输入6-16位大、小写字母、数字或特殊字符(!#*_)，必须至少包含其中两种类型')
      } else if ( this.vercode == '') {
        MessageBox('提示', '请输入验证码')
      }  else if ( this.newpassword == ''){
        MessageBox('提示', '请输入密码')
      } else if(this.oldpassword == '') {
        MessageBox('提示', '请再次输入密码')
      } else if(this.newpassword !== this.oldpassword ) {
        MessageBox('提示', '两次输入的密码不一致')
      } else {
        let data = {
          userName: this.mailbox,
          inputNumber: '',
          password: this.oldpassword,
          verificationCode: this.verification,
        }
        this.$http.post( this.baseUrl + '/customer/forgotPassword',data).then( (res) => {
          if( res.data.rlt == true ){
            MessageBox('提示','密码修改成功');
            this.$router.push('/')
          }
        })
      }
    }
  }
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
</style>

<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou.png",class="backImg")
    span {{ $t('calling.name')}}
    span
  .section
    .concat
      .oil
        span {{ $t('calling.instruct')}}
        .radiobox
          label(class="newradio")
            span(class="b-radio") {{ $t( 'calling.yes')}}
            input(type="radio", class="a-radio", :checked= "1", :value="0",v-model= "instruction", @click = "hhh()")
          label(class="newradio")
            span(class="b-radio") {{ $t( 'calling.no')}}
            input(type="radio", class="a-radio", :value="1", v-model= "instruction", @click = "hhh()")
      .oil
        span {{ $t('calling.jiu')}}
        .radiobox
          label(class="newradio")
            span(class="b-radio") {{ $t('calling.yes')}}
            input(type="radio", class="a-radio", :checked= "1", :value="0",v-model= "drink", @click = "hhh()")
          label(class="newradio")
            span(class="b-radio") {{ $t( 'calling.no')}}
            input(type="radio", class="a-radio", :value="1", v-model= "drink", @click = "hhh()")
      .oil
        span {{ $t('calling.zhuangtai')}}
        .radiobox
          label(class="newradio")
            span(class="b-radio") {{ $t('calling.yes')}}
            input(type="radio", class="a-radio", :checked= "1", :value="0",v-model= "spirit", @click = "hhh()")
          label(class="newradio")
            span(class="b-radio") {{ $t( 'calling.no')}} 
            input(type="radio", class="a-radio", :value="1", v-model= "spirit", @click = "hhh()")
      .other
        p {{ $t('calling.qita')}}
        textarea(cols="40", rows="6",class="newtext", v-model="other")
  .footer
    .btn( @click= "upload()", v-if="hidshow") {{ $t('calling.upload')}}
</template>

<script type="text/javascript">
import { MessageBox } from 'mint-ui';
import { watch } from 'fs';
export default {
  data () {
    return {
      instruction: 0,
      drink: 0,
      spirit: 0,
      other: '', // 多行选择
      suerup: true,
      //
      docmHeight: '0',  //默认屏幕高度
      showHeight:  '0',  //实时屏幕高度
      hidshow:true, //显示或者隐藏footer,
      isResize:false, //默认屏幕高度是否已获取
      
      trayCode: '',
      trayNum: '',
    }
  },
  methods: {
    hhh() {

    },
    upload() {
      let data = {
        driverCode: localStorage.getItem( 'code'),
        instructions: this.instruction,
        drinking: this.drink,
        mental: this.spirit,
        otherProblems: this.other,
      }
      let This = this
      this.$http.post( this.baseUrl + 'app/driver/addSomeCall', data).then((res)=>{
        console.log(res.data)
        if( res.status == 200 ){
          let newcode = res.data.data.code;
          let newtrayNum = res.data.data.trayNum;
          console.log(newcode,newtrayNum)
          this.trayCode = newcode;
          this.trayNum = newtrayNum;
          // let startAddress = res.data.data.orderSplitData.startAddress;
          // let endAddress  = res.data.data.orderSplitData.endAddress;
          // let datatype = res.data.data.orderSplitDatatype;
          // let orderCode = res.data.data.orderSplitDataorderCode;
          // localStorage.setItem('startAddress', startAddress);
          // localStorage.setItem('endAddress', endAddress);
          // localStorage.setItem('datatype', datatype);
          // localStorage.setItem('orderCode', orderCode);
          This.$router.push({path:"/check",query:{
            trayCode: this.trayCode,
            trayNum: this.trayNum,
          }})
        }
      })
    }
  },
  mounted() {
    let thit = this;
    window.onresize = ()=>{
      return(()=>{
        if (!this.isResize) {
          //默认屏幕高度
          this.docmHeight= document.documentElement.clientHeight;
          console.log(docmHeight)
          this.isResize = true;
         }
          //实时屏幕高度
          this.showHeight = document.body.clientHeight;
        })()
    }
    mui.back = function() { // 监听返回按钮返回到登录页面
      thit.$router.push({path: '/home'})
    }
  },
  watch:{
    showHeight() {
      if(this.docmHeight > this.showHeight){
        this.hidshow=false;
      }else{
        this.hidshow=true;
      }
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
.footer{
  width: 100%;
  height: 40px;
  text-align: center;
  margin-top: 2rem;
  .btn{
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: solid 1px #ccc;
    font-size: 12px;
    border-radius: 5px;
    margin: 0 auto;
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
.oil{
        margin-top: 1.8rem;
        display: flex;
        font-size: 0.37rem;
        margin-left: 0.69rem;
        align-items: center;
        span{
          color: #333333;
        }
        .radiobox{
          display: flex;
          position: absolute;
          right: 0.53rem;
          label{
            display: flex;
            align-items: center;
            margin-left: 0.2rem;
            .a-radio{
              width: 0.5333rem;
              height: 0.533rem;
              margin-left: 0.2rem;
              appearance: none;
              position: relative;
              outline: none;
            }
            .a-radio:before{
              content: '';
              width: 0.5333rem;
              height: 0.5333rem;
              border: 1px solid #666666;
              display: inline-block;
              border-radius: 50%;
              vertical-align: middle;
            }
            .a-radio:checked:before{
              content: '';
              width: 0.5333rem;
              height: 0.5333rem;
              border: 1px solid #666666;
              display: inline-block;
              border-radius: 50%;
              vertical-align: middle;
            }
            .a-radio:checked:after{
              content: '';
              width: 0.32rem;
              height: 0.32rem;
              text-align: center;
              background:#41c6fe;
              border-radius: 50%;
              display: block;
              position: absolute;
              top: 0.13rem;
              left: 0.13rem;
            }
            .a-radio:checked+label{
              color: #41c6fe;
            }
            span{
              color: #333333;
            }
          }
        }
      }
.other{
        margin-top: 1.8rem;
        display: flex;
        flex-direction: column;
        font-size: 0.37rem;
        margin-left: 0.69rem;
        p{
          text-align: left;
        }
        textarea{
          margin-top: 0.56666rem;
          border-radius: 5px;
          border: solid 1px #999999;
          outline: none;
          margin-right: 0.53rem;
        }
      }
</style>

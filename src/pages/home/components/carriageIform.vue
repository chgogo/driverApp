<template lang="jade">
.main
  .header
    router-link(to="/home",tag="span",class="sleft")
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
          span( class='meesleft') {{ $t('carriage.quhuoaddres')}}
          p( class='messright') {{  containerAddress }}
            //- p(class="p2") 科技大厦105xxx路
        .messone
          .meesleft
            span {{ $t('carriage.songhuoaddres')}}
          .messright
            p {{ terminal }}
            //- p(class="p2") 天猫大厦105xxx路
  //- baidumap( :startaddress="containerAddress", :endAddress="terminal")
  googlemap( :fatherval=" fatchval ")
  div(class="navbox")
    a( class="nav", :href="`https://www.google.com/maps/dir/?api=1&origin=${ terminal }&destination=${ containerAddress}&travelmode=driving`") 导航
    // a(href="http://gdown.baidu.com/data/wisegame/100330bd32c425ea/ditu_969103144.apk") 谷歌地图下载地址
  .othermessage
    .othertitle
      img(src= "@/assets/homeImg/lansekuang.png")
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
  .showdatatype( v-if="Thitdatatype == 1")
    .tishitext {{ $t('carriage.tipstext')}}
    uploadImages(@childByValue="childByValue")
    .distinguish
      button( @click='imgupload()') {{ $t('carriage.clickshi')}}
      //- button( @click='addtempil()') 新建
      //- button( @click='textupload()') 确认上传
    .shibie( v-for="(item,idx) in list", :key="idx")
      .shibox
        span {{ $t('carriage.guihao')}}
        input( v-model="item.containerNum", :placeholder="$t('login.wei')")
      .shibox
        span {{ $t('carriage.fengtiaohao')}}
        input( v-model="item.sealNum", :placeholder="$t('login.wei')")
      .shibox
        span {{ $t('carriage.typew')}}
        input( v-model="item.containerWeight", :placeholder="$t('login.wei')")
      .biaoji(@click='addtempil()') +
    .uploadtext 
      button(@click="textupload()") {{ $t('carriage.suerupload')}}
  // a( :href="`https://www.google.com/maps/dir/?api=1&origin=${ terminal }&destination=${ containerAddress}&travelmode=driving`")  开始导航(法国巴黎到法国瑟堡)
  .footer
    span( @click="nodetype1", v-if="stateshow1") {{ $t('carriage.task1')}}
    span( @click="nodetype2", v-if="stateshow2") {{ $t('carriage.task2')}}
    span( @click="nodetype3", v-if="stateshow3") {{ $t('carriage.task3')}}
    span( @click="nodetype4", v-if="stateshow4") {{ $t('carriage.task4')}}
    span( @click="nodetype5", v-if="stateshow5") {{ $t('carriage.task5')}}
    span( @click="nodetype6", v-if="stateshow6") {{ $t('carriage.task6')}}
    span( @click="nodetype7", v-if="stateshow7") {{ $t('carriage.task8')}}
    span( @click="nodetype8", v-if="stateshow8") {{ $t('carriage.task7')}}
    a( :href="`http://ditu.google.cn/maps/dir/?api=1&origin=${ lat },${ long }&destination= ${ terminalLat },${ terminalLon }&travelmode=driving`", v-if="shownavgater") {{ $t('carriage.navmatou')}}
    a( :href="`http://ditu.google.cn/maps/dir/?api=1&origin=${ lat },${ long }&destination= ${ containerAddressLat },${containerAddressLon }&travelmode=driving`", v-if="shownavgatertwo") {{ $t('carriage.navuser')}}
    //- a( :href="`http://api.map.baidu.com/direction?origin= latlng:${ this.currentlat},${ this.currentlon} |name: 起点&destination= ${ this.terminal } &mode=driving&region=''&output=html&src=webapp.baidu.openAPIdemo`",v-if="shownavgater", @click="clicknav") 导航去码头
    //- a( :href="`http://api.map.baidu.com/direction?origin= latlng:${ this.currentlat},${ this.currentlon} |name: 起点&destination= ${ this.containerAddress } &mode=driving&region=''&output=html&src=webapp.baidu.openAPIdemo`",v-if="shownavgatertwo", @click="clicknav") 导航去客户现场
    //- a( :href="`http://api.map.baidu.com/direction?origin=latlng:${ this.containerAddressLat},${ this.containerAddressLon}|name: 起点&destination= 河北|name: 终点&mode=driving&output=html&src=webapp.baidu.openAPIdemo`",v-if="shownavgater", @click="clicknav") 导航去指定地点
</template>
<script type="text/javascript">
// import baidumap from '@/components/baidumap';
import uploadImages from '@/components/uploadImages';
import googlemap from '@/components/routegooglemap';
import { MessageBox } from 'mint-ui';
const bseInfo = []
export default {
  components: {
    // baidumap: baidumap,
    uploadImages: uploadImages,
    googlemap: googlemap,
  },
  data () {
    return {
      stateshow1: true,
      stateshow2: false,
      stateshow3: false,
      stateshow4: false,
      stateshow5: false,
      stateshow6: false,
      stateshow7: false,
      stateshow8: false,
      shownavgater: false, // 导航
      shownavgatertwo: false,
      lat: '', // 经度
      long: '', // 纬度
      effected_at: '',
      ordertype: localStorage.getItem( 'datatype' ),
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

      currentlat: localStorage.getItem('currentaddresslat'), // 当前的经度
      currentlon: localStorage.getItem('currentaddresslng'), // 当前的纬度
      newarr: [],
      itemarr: [],
      ImgUrl: '',
      urlType: '',

      fatchval: { },
      cabinetnumber: '', // 柜号
      Paperstripseal: '', // 封条号
      Type_W: '',
      num: -1,
      list: [{
        // label: '柜号',
        containerNum: '',
        // labeltwo: '封条号',
        sealNum: '',
        // labelthree: 'Type-W',
        containerWeight: '',
      }],
      xinarr: [],
      Thitdatatype: localStorage.getItem('datatype'),
      loadingContactName: '',
      loadingContactPhone: '',

    }
  },
  mounted() {
    // this.mark();
    let thit = this;
    mui.back = function() { // 监听返回按钮返回页面
      thit.$router.push({path: '/home'})
    }
  },
  methods: {
    textupload() {
      let data = {
        orderCode: localStorage.getItem('orderCode'),
        orderContainerParamList: this.list,
      }
      this.$http.post( this.baseUrl + 'app/driver/addOrderContainerForList',data).then(()=>{
        if( res.data.rlt == true){
          MessageBox('提示','上传成功')
        }
      })
    },
    addtempil() {
      let obj = {
        // label: '柜号',
        containerNum: '',
        // labeltwo: '封条号',
        sealNum: '',
        // labelthree: 'Type-W',
        containerWeight: '',
      }
      this.list.push(obj);
    },
    imgupload() { // 图片识别文字
      // this.$router.push({path: '/home'});
      // let that = this;
      // this.newarr.forEach(function(item,idx){
      // let itemVal = 'http://192.168.1.127:8085/pic_file/' + item;
      //   that.itemarr.push(itemVal);
      // })
      let data = {
        orderCode: localStorage.getItem('orderCode'),
        imgParamList: this.newarr, // 子页面传过来的数组
      };
      console.log(data)
      this.$http.post( this.baseUrl + '/app/driver/addOrderContainerPictureForList',data).then( ( res ) => {
        this.num +=1;
        console.log(this.num)
        let data  = res.data.data;
        console.log(res)
        let newdata1 = JSON.parse(data[0]);
        let newdata2 = JSON.parse(data[1]);
        let newdata3 = JSON.parse(data[2]);
        this.list[this.num].containerNum = newdata1.words_result[0].words;
        this.list[this.num].sealNum = newdata2.words_result[0].words;
        this.list[this.num].containerWeight = newdata3.words_result[0].words;
      })
    },
    childByValueTwo (childValue) { // 上传地址
      console.log(childValue);
      this.address = childValue;
    },
    childByValue (childValue) { // 子组件传过来的图片
      console.log(childValue);
      let ImgUrl = childValue.split('.')[0];
      let urlType = childValue.split('.')[1];
      let ImgVal  = {
        imgHeadType: urlType,
        imgStr: ImgUrl,
      }
      // this.ImgUrl = childValue;
      // this.newarr.imgHeadType = this.urlType;
      // this.newarr.imgStr = this.ImgUrl;
      this.newarr.push(ImgVal)
      if( this.newarr.length > 3){
        this.newarr = this.newarr.slice(3);
      }
    },
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
    load() { // 获取数据
      let newcode = localStorage.getItem("orderCode");
      this.$http.get( this.baseUrl + 'order/acquireOrderDetailByCode/' + newcode).then((res)=>{
        console.log(res.data.data);
        let newdata = res.data.data;
        this.terminal = newdata.terminal; // 取货地点 ( 码头) 
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
        this.loadingContactName = newdata.loadingContactName;
        this.loadingContactPhone = newdata.loadingContactPhone;
        // this.fatchval = {
        //   containerAddress: newdata.containerAddress,
        //   containerAddressLon: newdata.containerAddressLon,
        //   containerAddressLat: newdata.containerAddressLat,
        //   terminal: newdata.terminal,
        //   terminalLon: newdata.terminalLon,
        //   terminalLat: newdata.terminalLat,
        // }
        console.log(this.terminalLat,this.terminalLon + '取柜地点的纬度和经度')
        console.log(this.containerAddressLat,this.containerAddressLon + '装柜地点的纬度和经度')
      })
    },
    getaddres() {
      if(navigator.geolocation){ // 获取经纬度
        navigator.geolocation.getCurrentPosition( (position) => {
          this.long = position.coords.longitude;  
          this.lat = position.coords.latitude;
        });
      }
    },
    dateTime() { // 给后台传时间
      var effected_at = new Date(Date.parse(this.daytime.replace(/-/g, "/")));
      var effected_at  = effected_at.toISOString();
      this.effected_at = effected_at;
    },
    // clicknav() { // 点击导航标签

    // },
    nodetype1() { //  确认执行任务
      this.getaddres();
      let data = {
        driverCode: localStorage.getItem('code'),
        orderCode: localStorage.getItem( 'orderCode' ),
        splitOrderType: localStorage.getItem('datatype'),
        address: "",
        addressLat: this.lat,
        addressLon: this.long,
        type: 1,
        status: 1,
        clockTime: this.effected_at,
      }
      if( localStorage.getItem( 'datatype' )  == 1 ){
        localStorage.setItem('nodeval',1)
        console.log(111)
        this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
          if( res.data.rlt == true){
            this.stateshow1 = false;
            this.stateshow2 = true;
            this.stateshow3 = false;
            this.stateshow4 = false;
            this.stateshow5 = false;
            this.stateshow6 = false;
            this.stateshow7 = false;
            this.stateshow8 = false;
            this.shownavgater = true;
            this.shownavgatertwo = false;
          }
        })
      } else if( localStorage.getItem( 'datatype' )  == 2 ){
        localStorage.setItem('nodeval',11)
        console.log(222)
        this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
          if( res.data.rlt == true){
            this.stateshow1 = false;
            this.stateshow2 = false;
            this.stateshow3 = false;
            this.stateshow4 = true;
            this.stateshow5 = false;
            this.stateshow6 = false;
            this.stateshow7 = false;
            this.stateshow8 = false;
            this.shownavgatertwo = true;
            this.shownavgater = false;
          }
        })
      }
    },
    nodetype2() { // 到达码头
      if( localStorage.getItem( 'datatype' ) == 1){
        localStorage.setItem('nodeval',2)
        this.getaddres();
        let data = {
          driverCode: localStorage.getItem('code'),
          orderCode: localStorage.getItem( 'orderCode' ),
          splitOrderType: localStorage.getItem('datatype'),
          address: "",
          addressLat: this.lat,
          addressLon: this.long,
          type: 2,
          status: 1,
          clockTime: this.effected_at,
        }
        this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
          if( res.data.rlt == true){
            this.stateshow1 = false;
            this.stateshow2 = false;
            this.stateshow3 = true;
            this.stateshow4 = false;
            this.stateshow5 = false;
            this.stateshow6 = false;
            this.stateshow7 = false;
            this.stateshow8 = false;
            this.shownavgater = false;
            this.shownavgater2 = false;
          }
        })
      } else if( localStorage.getItem( 'datatype' ) == 2){
        localStorage.setItem('nodeval',55)
        this.getaddres();
        let data = {
          driverCode: localStorage.getItem('code'),
          orderCode: localStorage.getItem( 'orderCode' ),
          splitOrderType: localStorage.getItem('datatype'),
          address: "",
          addressLat: this.lat,
          addressLon: this.long,
          type: 5,
          status: 1,
          clockTime: this.effected_at,
        }
        this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
          if( res.data.rlt == true){
            this.stateshow1 = false;
            this.stateshow2 = false;
            this.stateshow3 = false;
            this.stateshow4 = false;
            this.stateshow5 = false;
            this.stateshow6 = true;
            this.stateshow7 = false;
            this.stateshow8 = false;
            this.shownavgater = false;
            this.shownavgatertwo = false;
          }
        })
      }
    },
    nodetype3() { // 取柜完成
        this.getaddres();
        let data = {
          driverCode: localStorage.getItem('code'),
          orderCode: localStorage.getItem( 'orderCode' ),
          splitOrderType: localStorage.getItem('datatype'),
          address: "",
          addressLat: this.lat,
          addressLon: this.long,
          type: 3,
          status: 1,
          clockTime: this.effected_at,
        }
        this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
          if( res.data.rlt == true){
            this.stateshow1 = false;
            this.stateshow2 = false;
            this.stateshow3 = false;
            this.stateshow4 = true;
            this.stateshow5 = false;
            this.stateshow6 = false;
            this.stateshow7 = false;
            this.stateshow8 = false;
            this.shownavgatertwo = true;
            this.shownavgater = false;
          }
        })
        localStorage.setItem('nodeval', 3)
    },
    nodetype4() { // 到达客户现场
      if ( localStorage.getItem( 'datatype' ) == 1) {
        localStorage.setItem('nodeval', 4)
        this.getaddres();
        let data = {
          driverCode: localStorage.getItem('code'),
          orderCode: localStorage.getItem( 'orderCode' ),
          splitOrderType: localStorage.getItem('datatype'),
          address: "",
          addressLat: this.lat,
          addressLon: this.long,
          type: 4,
          status: 1,
          clockTime: this.effected_at,
        }
        this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
          if( res.data.rlt == true){
            this.stateshow1 = false;
            this.stateshow2 = false;
            this.stateshow3 = false;
            this.stateshow4 = false;
            this.stateshow5 = true;
            this.stateshow6 = false;
            this.stateshow7 = false;
            this.stateshow8 = false;
            this.shownavgater = false;
            this.shownavgatertwo = false;
          }
        })
      } else if ( localStorage.getItem( 'datatype' ) == 2 ) {
        localStorage.setItem('nodeval', 22)
        this.getaddres();
        let data = {
          driverCode: localStorage.getItem('code'),
          orderCode: localStorage.getItem( 'orderCode' ),
          splitOrderType: localStorage.getItem('datatype'),
          address: "",
          addressLat: this.lat,
          addressLon: this.long,
          type: 2,
          status: 1,
          clockTime: this.effected_at,
        }
        this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
          if( res.data.rlt == true){
            this.stateshow1 = false;
            this.stateshow2 = false;
            this.stateshow3 = false;
            this.stateshow4 = false;
            this.stateshow5 = false;
            this.stateshow6 = false;
            this.stateshow7 = false;
            this.stateshow8 = true;
            this.shownavgater = false;
            this.shownavgatertwo = false;
          }
        })
      }
    },
    nodetype5() { // 客户确认
      localStorage.setItem('nodeval', 9)
      this.getaddres();
      let data = {
        driverCode: localStorage.getItem('code'),
        orderCode: localStorage.getItem( 'orderCode' ),
        splitOrderType: localStorage.getItem('datatype'),
        address: "",
        addressLat: this.lat,
        addressLon: this.long,
        type: 5,
        status: 1,
        clockTime: this.effected_at,
      }
      this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
        if( res.data.rlt == true){
          this.stateshow1 = false;
          this.stateshow2 = false;
          this.stateshow3 = false;
          this.stateshow4 = false;
          this.stateshow5 = false;
          this.stateshow6 = true;
          this.stateshow7 = false;
          this.stateshow8 = false;
          this.shownavgater = false;
          this.shownavgatertwo = false;
        }
      })
    },
    nodetype6() { // 完成任务
        this.getaddres();
        let data = {
          driverCode: localStorage.getItem('code'),
          orderCode: localStorage.getItem( 'orderCode' ),
          splitOrderType: localStorage.getItem('datatype'),
          address: "",
          addressLat: this.lat,
          addressLon: this.long,
          type: 6,
          status: 1,
          clockTime: this.effected_at,
        }
        this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
          if( res.data.data != null){
            this.stateshow1 = true;
            this.stateshow2 = false;
            this.stateshow3 = false;
            this.stateshow4 = false;
            this.stateshow5 = false;
            this.stateshow6 = false;
            this.stateshow7 = false;
            this.stateshow8 = false;
            this.shownavgater = false;
            this.shownavgatertwo = false;
            let startAddress2 = res.data.data.startAddress;
            let endAddress2  = res.data.data.endAddress;
            let datatype2 = res.data.data.type;
            let orderCode2 = res.data.data.orderCode;
            localStorage.setItem('startAddress', startAddress2);
            localStorage.setItem('endAddress', endAddress2);
            localStorage.setItem('orderCode', orderCode2);
            localStorage.setItem('datatype', datatype2);
            this.$router.push('/home')
            localStorage.setItem('nodeval',5)
          } else if ( res.data.data == null) {
            MessageBox('提示', '暂时无新任务请稍后下单');
            localStorage.setItem('nodeval', 0)
          }
        })
    },
    nodetype7() { // 开始运输
      localStorage.setItem('nodeval',44)
      this.getaddres();
      let data = {
        driverCode: localStorage.getItem('code'),
        orderCode: localStorage.getItem( 'orderCode' ),
        splitOrderType: localStorage.getItem('datatype'),
        address: "",
        addressLat: this.lat,
        addressLon: this.long,
        type: 4,
        status: 1,
        clockTime: this.effected_at,
      }
      this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
        if( res.data.rlt == true){
          this.stateshow1 = false;
          this.stateshow2 = true;
          this.stateshow3 = false;
          this.stateshow4 = false;
          this.stateshow5 = false;
          this.stateshow6 = false;
          this.stateshow7 = false;
          this.stateshow8 = false;
          this.shownavgater = true;
          this.shownavgatertwo = false;
        }
      })
    },
    nodetype8() { // 客户完成装柜
      localStorage.setItem('nodeval',33)
      this.getaddres();
      let data = {
        driverCode: localStorage.getItem('code'),
        orderCode: localStorage.getItem( 'orderCode' ),
        splitOrderType: localStorage.getItem('datatype'),
        address: "",
        addressLat: this.lat,
        addressLon: this.long,
        type: 3,
        status: 1,
        clockTime: this.effected_at,
      }
      this.$http.post(  this.baseUrl + 'app/driver/punchCard', data ).then( (res) => {
        if( res.data.rlt == true){
          this.stateshow1 = false;
          this.stateshow2 = false;
          this.stateshow3 = false;
          this.stateshow4 = false;
          this.stateshow5 = false;
          this.stateshow6 = false;
          this.stateshow7 = true;
          this.stateshow8 = false;
          this.shownavgater = false;
          this.shownavgatertwo = false;
        }
      })
    },
    mark() {
      if ( localStorage.getItem('nodeval') == 1 ) {
        this.stateshow2 = true;
        this.stateshow1 = false;
        this.stateshow3 = false;
        this.shownavgater = true;
        this.shownavgatertwo = false;
      } else if( localStorage.getItem('nodeval') == 2 ){
        this.stateshow2 = false;
        this.stateshow1 = false;
        this.stateshow3 = true;
        this.stateshow4 = false;
        this.shownavgater = false;
        this.shownavgatertwo= false;
      } else if(localStorage.getItem('nodeval') == 3 ){
        this.stateshow2 = false;
        this.stateshow1 = false;
        this.stateshow3 = false;
        this.stateshow4 = true;
        this.shownavgatertwo = true;
        this.shownavgater = false;
      } else if(localStorage.getItem('nodeval') == 4 ) { // 暂无新任务
        this.stateshow2 = false;
        this.stateshow1 = false;
        this.stateshow3 = false;
        this.stateshow4 = false;
        this.stateshow5 = true;
        this.stateshow6 = false;
        this.shownavgater = false;
        this.shownavgatertwo = false;
      } else if(localStorage.getItem('nodeval') == 5 ) {
        this.stateshow2 = false;
        this.stateshow1 = true;
        this.stateshow3 = false;
        this.stateshow4 = false;
        this.stateshow5 = false;
        this.stateshow6 = false;
        this.shownavgater = false;
        this.shownavgatertwo = false;
      } else if(localStorage.getItem('nodeval') == 9 ) { // 客户确认的时候
        this.stateshow2 = false;
        this.stateshow1 = false;
        this.stateshow3 = false;
        this.stateshow4 = false;
        this.stateshow5 = false;
        this.stateshow6 = true;
        this.shownavgater = false;
        this.shownavgatertwo = false;
      } else if( localStorage.getItem('nodeval') == 11){
        this.stateshow1 = false;
        this.stateshow4 = true;
        this.shownavgatertwo = true;
        this.shownavgater = false;
      }else if( localStorage.getItem('nodeval') == 22){
        this.stateshow1 = false;
        this.stateshow4 = false;
        this.stateshow8 = true;
        this.shownavgater = false;
        this.shownavgatertwo = false;
      }else if( localStorage.getItem('nodeval') == 33){
        this.stateshow1 = false;
        this.stateshow4 = false;
        this.stateshow8 = false;
        this.stateshow7 = true;
        this.shownavgater = false;
        this.shownavgatertwo = false;
      } else if( localStorage.getItem('nodeval') == 44){
        this.stateshow1 = false;
        this.stateshow4 = false;
        this.stateshow8 = false;
        this.stateshow7 = false;
        this.stateshow2 = true;
        this.shownavgater = true;
        this.shownavgatertwo = false;
      } else if( localStorage.getItem('nodeval') == 55){
        this.stateshow1 = false;
        this.stateshow4 = false;
        this.stateshow8 = false;
        this.stateshow7 = false;
        this.stateshow2 = false;
        this.stateshow6 = true;
        this.shownavgater = false;
        this.shownavgatertwo = falses;
      } else if ( localStorage.getItem('nodeval') == 0 ) {
        this.stateshow6 = true;
        this.stateshow2 = false;
        this.stateshow1 = false;
        this.stateshow3 = false;
        this.stateshow4 = false;
        this.stateshow5 = false;
      }
    },
  },
  created() {
    this.load();
    this.mark();
    // localStorage.removeItem('nodeval');
  }
}
</script>

<style lang="scss" scoped>
.navbox{
  width: 100%;
  height: 30px;
  position: relative;
}
.nav{
  width: 80px;
  padding: 0.1rem 0.2rem;
  height: 30px;
  line-height: 30px;
  background: #ff6807;
  font-size: 14px;
  display: block;
  color: #fff;
  border-radius: 20px;
  position:absolute;
  right: 0.26rem;
  margin-top: 0.2rem;
}
.uploadtext{
  margin-left: 0.26rem;
  text-align: left;
  button{
    background: #ff6807;
    color: #fff;
    width: 2.66rem;
    outline: none;
    border-radius: 2rem;
    font-size: 0.32rem;
  }
}
.distinguish{
  margin-left: 0.266rem;
  text-align: left;
  button{
    background: #ff6807;
    color: #fff;
    width: 2.66rem;
    height: 0.8rem;
    outline: none;
    border-radius: 2rem;
    margin-bottom: 0.26rem;
    font-size: 0.32rem;
  }
}
.shibie{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;
  .shibox{
    width: 31%;
    display: flex;
    align-items: center;
    span{
      font-size: 0.22rem;
      margin-left: 0.2rem;
    }
    input{
      width: 1.66rem;
      border: solid 1px #ccc;
      outline: none;
      font-size: 0.22rem;
    }
  }
  .biaoji{
    color: #ff6807;
    font-size: 0.62rem;
    font-weight: bold;
    text-align: center;
    margin-left: 0.26rem;
  }
}
.tishitext{
  font-size: 0.3rem;
  height: 1.3rem;
  line-height: 1.3rem;
  color: #ff6807;
  text-align: left;
  margin-left: 0.26666rem;
  overflow:hidden; //超出的文本隐藏
  text-overflow:ellipsis; //溢出用省略号显示
  white-space:nowrap; //溢出不换行
}
.footer{
  width: 100%;
  // background: rgb(65, 198, 254);
  margin-top: 0.266rem;
  text-align: center;
  position: relative;
  span{
    display: block;
    background: rgb(65, 198, 254);
    color: rgb(255, 255, 255);
    font-size: 0.37rem;
    height: 1.3rem;
    line-height: 1.3rem;
  }
  a{
    width: 2rem;
    display: block;
    background: #ff6807;
    color: rgb(255, 255, 255);
    font-size: 0.27rem;
    height: 1.3rem;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
      margin-top: 0.8rem;
      .meesleft{
        width: 30%;
        margin-left: 0.8rem;font-size: 0.37rem;
        color: rgb(153, 153, 153);
      }
      .messright{
        margin-left: 1rem;
        text-align: left;
        color: rgb(102, 102, 102);
        font-size: 0.37rem;
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
        width: 2.66666rem;
        text-align: center;
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

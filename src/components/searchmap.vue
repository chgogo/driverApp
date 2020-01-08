<template>
<div id="all">
  <div class="search">
    <div class="imgleft">
      <img src="@/assets/homeImg/sousuo@2x.png" alt="Image failed to load" class="newimg">
    </div>
    <div class="inputright">
      <input type="text" id="suggestId" name="address_detail" placeholder="petrol station" v-model="address_detail" class="input_style" @change = 'childClick'/>
    </div>
  </div>
  <div id="allmap"></div>
</div>
</template>
<script type="text/javascript">
import {MP} from '../assets/map.js'
export default {
  data () {
    return {
      address_detail: null, //详细地址
      userlocation: {lng: "", lat: ""},
      pointlng: '',
      pointlat: '',
    }
  },
  methods: {
    childClick() {
      console.log(this.address_detail)
      this.$emit('childByValue', this.address_detail)
    },
    readmap() {
      // this.$nextTick(function () {
      let th = this;
      // 创建Map实例
      MP( th.Qp3RzdrorzNLkFbvDsl9RQmtT4anjx47).then( BMap => {
      let map = new BMap.Map("allmap");

      // myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result){ if (result){
      // }})
      // 初始化地图,设置中心点坐标，
      let point = new BMap.Point(this.pointlng, this.pointlat); // 地图中心点的坐标
      map.centerAndZoom(point, 12); // 设置地图中心点坐标
      map.enableScrollWheelZoom( true); // 允许鼠标滑轮放大缩小
      
      // var geolocation = new BMap.Geolocation();
      // geolocation.getCurrentPosition(function(r){
      //   if(this.getStatus() == BMAP_STATUS_SUCCESS){
      //     var mk = new BMap.Marker(r.point);
      //     map.addOverlay(mk);
      //     map.panTo(r.point);
      //     alert('您的位置：'+r.point.lng+','+r.point.lat);
      //   }
      //   else {
      //     alert('失败'+this.getStatus());
      //   }
      // });
      var geolocation = new BMap.Geolocation();
      // 开启SDK辅助定位
      geolocation.enableSDKLocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          this.pointlng = r.point.lng; // 经度
          this.pointlat = r.point.lat; // 纬度
          // alert('您的位置：'+r.point.lng+','+r.point.lat);
          localStorage.setItem('nextlong', r.point.lng);
          localStorage.setItem('nextlat', r.point.lat);
        }
        else {
          alert('failed'+this.getStatus());
        }
      });
      let ac = new BMap.Autocomplete(  //建立一个自动完成的对象
        {
         "input": "suggestId", 
         "location": map,
        })
      let myValue;
      ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
        let _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        this.address_detail = myValue;
        console.log(this.address_detail);
        setPlace();
      });
      // 定位
      function setPlace() {
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun() {
          th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
          map.centerAndZoom(th.userlocation, 18);
          map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注 
        }
        let local = new BMap.LocalSearch(map, { //智能搜索
          onSearchComplete: myFun,
        });
        local.search(myValue);
        //测试输出坐标（指的是输入框最后确定地点的经纬度）
        map.addEventListener("click",function(e){
        //经度
        console.log(th.userlocation.lng);
        //维度
        console.log(th.userlocation.lat);
        })
      }
      })
    // })
    }
  },
  mounted() {
    this.readmap();
  },
  created() {
    // this.readmap();
  }
}
</script>

<style lang="scss" scoped>
.BMap_mask{
  width: 100%;
}
#allmap{
  border: none;
  width: 100%;
  height: 9.5rem;
}
#suggestId{
  width: 5.3rem;
  height: 0.53rem;
  position: absolute;
  font-size: 0.32rem;
}
.search{
  width: 90%;
  height: 0.84rem;
  position: absolute;
  background: rgb(255, 255, 255);
  z-index: 9;
  margin-left: 0.38rem;
  margin-top: 0.32rem;
  display: flex;
  align-items: center;
  .imgleft{
    margin-left: 1.62rem;
  }
  .inputright{
    margin-left: 0.3rem;
    padding-bottom: 0.4rem; 
  }
}
.newimg{
  width: 0.37rem;
  height: 0.37rem;
  margin-top: 0.1rem;
}
iframe{
  width: 100%;
  height: 100px;
}
.tangram-suggestion-main{
  display: none;
}
</style>

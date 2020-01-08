<template lang="jade">
div
  div( id="l-map")
  div( id="#r-result")
</template>
<script type="text/javascript">
import {MP} from '.././assets/map.js'
export default {
  props: {
    startaddress: '',
    endAddress: '',
  },
  data () {
    return {
      pointlng: '',
      pointlat: '',
    }
  },
  mounted() {
  // this.$nextTick(()=>{
    let thit = this;
    MP( thit.zZQwxfWEOQm2qhhhr1kdk6qR4n8E288v).then(BMap => {
    let map = new BMap.Map("l-map");
    let point = new BMap.Point(this.pointlng, this.pointlat); // 创建点坐标，汉得公司的经纬度坐标
    map.centerAndZoom(point, 16); // 设置地图中心点坐标
    map.enableScrollWheelZoom( true); // 允许鼠标滑轮放大缩小
    // 经纬度转化为地址
    var myGeo = new BMap.Geocoder();
    myGeo.getPoint("北京朝阳区叶青大厦", function(point){
      if (point) {
        console.log(point)
      }
    });
    // 获取时间和公里数
    var searchComplete = function (results){
      if (driving.getStatus() != BMAP_STATUS_SUCCESS){
        return ;
      }
      var plan = results.getPlan(0);
      var cc = plan.getDuration(true) + "\n"; // 时间
      var hh = plan.getDistance(true) + "\n"; // 公里速
      console.log(hh)
    }
    // 路线规划
    var driving = new BMap.DrivingRoute(map, {
        onSearchComplete: searchComplete,  
        renderOptions: {    
          map   : map,
          panel : "results",
          autoViewport: true   
        }
    });
    driving.search( this.startaddress, this.endAddress);
    var geolocation = new BMap.Geolocation();
      // 开启SDK辅助定位
      geolocation.enableSDKLocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          this.pointlng = r.point.lng;
          this.pointlat = r.point.lat;
          // alert('您的位置：'+r.point.lng+','+r.point.lat);
          localStorage.setItem('currentaddresslat',r.point.lat);
          localStorage.setItem('currentaddresslng',r.point.lng)
        }
        else {
          alert('failed'+this.getStatus());
        }
      });
    })
  // })
  },
  methods: {
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
body, html {width: 100%;height: 100%; margin:0;font-family:"微软雅黑";}
#l-map{height:300px;width:100%;}
</style>

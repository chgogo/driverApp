<template lang='jade'>
  .newmain
    #maps
</template>

<script>
import google from "google";
export default {
  name: "",
  props: {
    fatherval: { },
  },
  data() {
    return {
      // containerAddressLat: fatherval.containerAddressLat, // 装柜地点
      // containerAddressLon: fatherval.containerAddressLon,
      // terminalLat: fatherval.terminalLat, // 港口 取柜地点
      // terminalLon: fatherval.terminalLon,
    };
  },
  methods: {
    loadmap() {
      console.log(this.fatherval)
      // let initAddr = { lat: 34.4, lng: 135.3 };
      // let destAddr = { lat: 35.42, lng: 139.46 };
      let initAddr = localStorage.getItem('endAddress');
      let destAddr = localStorage.getItem('startAddress');
      let map = new google.maps.Map(document.getElementById("maps"), {
        center: destAddr,
        scrollwheel: false,
        zoom: 18,
        zoomControl:false,
        scaleControl:false,
        streetViewControl:false,
        overviewMapControl:false,
        rotateControl:false,
        mapTypeControl:false,
        panControl:false,
      });
      let directionsDisplay = new google.maps.DirectionsRenderer({
        map: map
      });
      // Set destination, origin and travel mode.
      let request = {
        origin: initAddr, // 起点
        destination: destAddr, // 终点
        travelMode: google.maps.TravelMode.DRIVING // 运输的方式
      };
      // Pass the directions request to the directions service.
      let directionsService = new google.maps.DirectionsService();
      directionsService.route(request, function(result, status) {
        if (status == "OK") {
          console.log(result.routes[0].legs[0].distance.text);
          // Display the route on the map.
          directionsDisplay.setDirections(result);
        }
      });
    }
  },
  mounted() {
    this.loadmap()
  },
  created() {

  }
};
</script>

<style lang='scss'>
.main {
  width: 100%;
  #maps {
    width: 100%;
    height: 6.6rem;
  }
}
</style>

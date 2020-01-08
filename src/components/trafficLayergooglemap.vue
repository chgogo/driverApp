<template lang='jade'>
.traf
  #map
</template>

<script>
// 谷歌地图交通层
export default {
  name: "",

  data() {
    return {};
  },

  methods: {
    loadmap() {
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: { lat: 34.04924594193164, lng: -118.24104309082031 },
        zoomControl:false,
        scaleControl:false,
        streetViewControl:false,
        overviewMapControl:false,
        rotateControl:false,
        mapTypeControl:false,
        panControl:false,
      });
      // 获取当前位置
      let  infoWindow = new google.maps.InfoWindow;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log(pos);
            infoWindow.setPosition(pos);
            infoWindow.setContent("您当前的位置.");
            infoWindow.open(map);
            map.setCenter(pos);
            var trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);
          },
          function() {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
      }
    }
  },
  mounted() {
    this.loadmap();
  }
};
</script>

<style lang='scss'>
#map {
  height: 8rem;
}
</style>

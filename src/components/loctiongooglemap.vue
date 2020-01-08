<template lang='jade'>
  .esbox
    #map
</template>

<script>
export default {
  name: "",

  data() {
    return {};
  },

  methods: {
    loadmap() {
      let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 18,
        zoomControl:false,
        scaleControl:false,
        streetViewControl:false,
        overviewMapControl:false,
        rotateControl:false,
        mapTypeControl:false,
        panControl:false,
      });
      let infoWindow = new google.maps.InfoWindow();
      // 谷歌地图获取当前地理位置
      let that = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            that.$emit('chlidval', pos) // 子传父
            infoWindow.setPosition(pos);
            infoWindow.setContent("Your current location.");
            infoWindow.open(map);
            map.setCenter(pos);
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
        infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
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

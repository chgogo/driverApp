<template lang='jade'>
  .concatbox
    <input id="pac-input" class="controls" type="text" :placeholder="$t('searchmap.text')" ref="ipt" v-model="searchval">
    <div id="map"></div>
</template>
<script>
import google from 'google';
export default {
  data() {
    return {
      map: "",
      input: "",
      newlat: null,
      newlon: null,
      searchval: '',
      name: '',
      map: '',
      // destAddr: localStorage.getItem('portaddress'),
    };
  },
  // watch: {
  //   portaddress(newName,oldName){
  //     console.log(newName, oldName)
  //   }
  // },
  methods: {
    loadmap() {
      var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 35.70, lng: 139.69 },
        zoom: 15,
        mapTypeId: "roadmap",
        zoomControl:false,
        scaleControl:false,
        streetViewControl:false,
        overviewMapControl:false,
        rotateControl:false,
        mapTypeControl:false,
        panControl: false,
      });
      this.map = map
      let  infoWindow = new google.maps.InfoWindow;
      console.log(infoWindow)
      // 获取当前的地理位置
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Current position.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
      } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
      // Create the search box and link it to the UI element.
      var input = document.getElementById('pac-input');
      console.log(input)
      var searchBox = new google.maps.places.SearchBox(input);
      
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

      // Bias the SearchBox results towards current map's viewport.
      map.addListener("bounds_changed", function() {
        searchBox.setBounds(map.getBounds());
      });
      var markers = [];
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      let thit  = this;
      searchBox.addListener("places_changed", function() {
        console.log(111)
        var places = searchBox.getPlaces();
        if (places.length == 0) {
          return;
        }
        // Clear out the old markers.
        markers.forEach(function(marker) {
          marker.setMap(null);
        });
        markers = [];
        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
          console.log(place.geometry.viewport.ga.j)
          console.log(place.geometry.viewport.na.j)
          console.log(place.formatted_address)
          let newlat = place.geometry.viewport.ka.g;
          let newlon = place.geometry.viewport.pa.g;
          let name = place.formatted_address + place.name;
          thit.name = name;
          thit.$emit('chlidvalnew', {newlat,newlon,name}) // 子传父
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };
          // Create a marker for each place.
          markers.push(
            new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            })
          );
          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
        // thit.routemap();
        // console.log(localStorage.getItem('portaddress') == '上海')
      });
    },
    // routemap() {
    //   // 路线规划
    //   // let initAddr = { lat: 34.4, lng: 135.3 };
    //   // let destAddr = { lat: 35.42, lng: 139.46 };
    //   let initAddr =  this.name;
    //   let destAddr = localStorage.getItem('portaddress');
    //   let directionsDisplay = new google.maps.DirectionsRenderer({
    //     map: this.map
    //   });
    //   // Set destination, origin and travel mode.
    //   let request = {
    //     origin: initAddr, // 起点
    //     destination: destAddr, // 终点
    //     travelMode: google.maps.TravelMode.DRIVING // 运输的方式
    //   };
    //   // Pass the directions request to the directions service.
    //   let directionsService = new google.maps.DirectionsService();
    //   let thit = this;
    //   directionsService.route(request, function(result, status) {
    //     if (status == "OK") {
    //       let kilometrenum = result.routes[0].legs[0].distance.text;
    //       let newkilometrenum = kilometrenum.split(' ');
    //       console.log(newkilometrenum[0]);
    //       thit.$emit('chlidval',newkilometrenum[0])
    //       // Display the route on the map.
    //       directionsDisplay.setDirections(result);
    //     }
    //   })
    // }
  },
  mounted() {
    this.loadmap(localStorage.getItem('portaddress'));
    
    // if(localStorage.getItem('portaddress') == '上海') {
    //   console.log('港口没改变')
    //   this.routemap();
    // } else {
    //   this.routemap();
    // }
  },
};
</script>
<style lang='scss'>
.controls{
  margin-left: 3rem;
}
#map {
  height: 8rem;
}
/* Optional: Makes the sample page fill the window. */
html,body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#description {
  font-family: Roboto;
  font-size: 0.4rem;
  font-weight: 300;
}

#infowindow-content .title {
  font-weight: bold;
}

#infowindow-content {
  display: none;
}

#map #infowindow-content {
  display: inline;
}

.pac-card {
  margin: 0.26rem 0.26rem 0 0;
  border-radius: 2px 0 0 2px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  font-family: Roboto;
}

#pac-container {
  padding-bottom: 0.32rem;
  margin-right: 0.32rem;
}

.pac-controls {
  display: inline-block;
  padding: 0.13rem 0.29rem;
}

.pac-controls label {
  font-family: Roboto;
  font-size: 0.34rem;
  font-weight: 300;
}

#pac-input {
  background-color: #fff;
  font-family: Roboto;
  font-size: 0.4rem;
  font-weight: 300;
  text-overflow: ellipsis;
  border: solid 1px #ccc;
  margin-top: 0.26rem;
  width: 5.333rem;
  height: 0.53rem;
  padding-left: 0.2rem;
}

#pac-input:focus {
  border-color: #4d90fe;
}

#title {
  color: #fff;
  background-color: #4d90fe;
  font-size: 0.6rem;
  font-weight: 500;
  padding: 0.16rem 0.32rem;
}
#target {
  width: 9.2rem;
}
</style>

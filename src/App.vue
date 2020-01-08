<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
}

</script>

<style>
@import './assets/scss/main.scss';
.backImg{
  width: 0.24rem;
  height: 0.53rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
html, body {
  width: 100%;
  height: 100%;
}
</style>

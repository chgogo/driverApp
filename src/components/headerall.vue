<template lang='jade'>
  .header
    router-link(to="/home",tag="span",class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span 加油记录
    span(class="sright" , @click= "backhome()") 确定
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  methods: {
    backhome() {
      let data = {
        vehicleCode: "",
        oilStation: "string",
        oilLiters: 0,
        oilAmount: 0,
        mileage: 0
      }
      this.$http.post('',data).then( (res) => {

      })
      this.$router.push({path: '/home'})
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
.backImg{
  width: 0.24rem;
  height: 0.53rem;
}
</style>

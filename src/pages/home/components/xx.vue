<template lang="jade">
.main
  div
    mt-picker( :slots = 'slots', @change=" onvaluechange", value-key="name")
</template>
<script>
export default {
  name: "",
  data () {
    return {
      slots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values:[],
          className: 'slot3',
          textAlign: 'left'
        }
      ],
      dataval: [],
    }
  },

  methods: {
    onvaluechange(picker,values) {
      console.log(picker)
    },
    citydata() { // 请求后台的城市数据
      let thit = this;
      this.$http.get( this.baseUrl + '/base/data/acquireBaseFourLevelDataList',).then( (res) => {
        thit.slots[0].values = res.data.data;
      })
    },
  },
  created() {
    this.citydata()
  },
}
</script>

<style lang="scss">

</style>

<template lang="jade">
.main
  .header
    router-link(to="/", tag="span", class="sleft")
      img(src="@/assets/homeImg/fanhuijiantou@2x.png",class="backImg")
    span( class="centerspan") {{ $t('explain.explain')}}
    span
  .section
    .text
      ul
        li
          span( class="textblod") 1，
          span 司机使用分配的账号进行登录。
        li
          span( class="textblod") 2，
          span 首页点击点呼上班按钮开始点检点检分为车辆点检和司机身体状况点检，点检确认无误以后开始上班。
        li
          span( class="textblod") 3，
          span 首页中部会有系统给司机分配的任务，点击查看详情跳转到任务详情页面，任务详情页面会显示出任务的起始点，终点，时间，和其他的一些信息，拉空柜的时候会显示出一个图片识别的按钮按照柜号，封条号，Type-w依次上传图片点击识别出来然后上传，或者司机手动填写。底部按钮为司机正在进行的任务，进行到哪一步的时候点击对应的按钮。
        li
          span(class="textblod") 4，
          span 首页下方分为8个模块，每个模块都有对应的页面，按照司机的需求选择模块，模块里有司机对应填写的内容。
        li
          span( class='textblod') 5，
          span 左上方小黑块代表的是司机个人的信息，点击按钮选择接单记录，会有司机完成的任务列表点击列表，可以查看运输信息的一些详细信息。
</template>

<script>
export default {
  name: '',

  data () {
    return {
      
    }
  },
  methods: {}
}
</script>

<style lang='scss'>
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
  .centerspan{
    margin-right: 0.4rem;
  }
}

.section{
  .text{
    ul{
      padding: 0.36rem;
      li{
        text-align: left;
        font-size: 0.37rem;
        line-height: 0.6rem;
        margin-top: 0.26rem;
        .textblod{
          font-weight: bold;
          color: #000;
        }
        span {
          color: #000;
        }
      }
    }
  }
}
</style>

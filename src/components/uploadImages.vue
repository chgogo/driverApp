<template>
  <div class="avatar">
    <div class="hasPic" v-show="imgUrls.length > 0" v-for="(item,index) in imgUrls" :key="index">
      <img class="seledPic" ref="picture" :src="item?item:require('../../static/Images/imagebj.jpg')" name="avatar" @click="bigImg(index)">
      <img class="delect" src="../../static/Images/del.png" @click="delect(index)">
    </div>
    <div class="imgMask" v-if="showBigImg" @click.stop="showBigImg=!showBigImg" id="showmodel">
      <div class="showImg">
        <mt-swipe :auto="0" :show-indicators="false" @change="handleChange" :continuous="false" :defaultIndex="num">
          <mt-swipe-item v-for="(item,index) in imgUrls" :key="item.id">
            <div class="num"  >{{index+1+'/'+imgUrls.length}}</div>
            <img :src="imgUrls[index]" class="img"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="selPic"  v-if="imgUrls.length<3">
      <img src="@/assets/homeImg/shangchuanzhaopian@2x.png" name="avatar">
      <input type="file" maxlength="" class="input-file" multiple="multiple" name="avatar" ref="avatarInput" @change="changeImage($event)" accept="image/gif,image/jpeg,image/jpg,image/png">
    </div>
  </div>
</template>
<script>
import {MessageBox, Toast} from 'mint-ui'
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  name: 'upload',
  data () {
    return {
      showBigImg: false,
      maxImages: 6,
      leftImages: 0,
      pictureNums: '上传图片',
      imgUrls: [],
      num: 0,
      avatar: '',
      file: '',
      showBg: false,
      result: '', // bace64
      imgtype: '', // 图片的类型
      newbs: '',
    }
  },
  props: ['uploadType', 'imgUrl'],
  created() {
    this.avatar = this.imgUrl;
  },
  methods: {
    changeImage: function (e) {
      if (e.target.files.length <= (this.maxImages - this.imgUrls.length)) {
        for (var i = 0; i < e.target.files.length; i++) {
          let file = e.target.files[i]
          this.file = file
          console.log(this.file)
          let imgtype = this.file.name;
          let imgnewtype = imgtype.split('.')[1];
          this.imgtype = imgnewtype;
          let reader = new FileReader();
          let that = this;
          reader.readAsDataURL(file)
          reader.onload = function (e) {
          this.newbs = this.result.split(',')[1];
            let data = {
              imgHeadType: that.imgtype,
              imgStr:  this.newbs,
            }
            that.$http.post('/api/upload/img/uploadImgByBase64', data).then( (res) =>{
              if(res.data.rlt == true){
                console.log(res.data.data)
                that.$emit('childByValue', res.data.data); // 传过去的图片
              }
            })
            that.imgUrls.push(this.result);
          }
        }
        // 剩余张数
        this.leftImages = this.maxImages - (this.imgUrls.length + e.target.files.length)
        this.pictureNums = String(this.maxImages - (this.imgUrls.length + e.target.files.length)) + '/' + String(this.maxImages)
      } else {
        Toast('只能选择' + (this.maxImages - this.imgUrls.length) + '张了')
      }
    },
    delect (index) {
      this.imgUrls.splice(index, 1)
      this.leftImages++
      if (this.leftImages === this.maxImages) {
        this.pictureNums = '上传图片';
      } else {
        this.pictureNums = String(this.leftImages) + '/' + String(this.maxImages)
      }
    },
    handleChange (index) {
      this.num = index;
    },
    bigImg (index) {
      this.showBigImg = true;
      this.num = index;
    }
  }
}
</script>
<style  scope lang="scss">
.mint-swipe-item {
  img{
    height: 6.5rem;
  }
}
#showmodel{
  background: #ccc;
}
  .newphopo{
    width: 1.73rem;
    height: 1.73rem;
    opacity: 0;
  }
  .avatar {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .hasPic{
    position: relative;
    width: 1.5625rem;
    height:1.5625rem;
    margin-left: 0.2666rem;
    margin-bottom: 0.2666rem;
  }
  .input-file {
    width: 1.5625rem;
    height: 1.5625rem;
    background: red;
    opacity: 0;
  }
  .seledPic {
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .delect{
    position: absolute;
    top: -0.13px;
    right: -0.053px;
    width: 0.4rem;
    height: 0.4rem;
  }
  .selPic,.photo{
    margin-left: 0.2666rem;
    margin-bottom: 0.2666rem;
    position: relative;
    width:1.5625rem;
    height:1.5625rem;
  }
  .selPic img,.photo img{
    position: absolute;
    width: 1.5625rem;
    height: 1.5625rem;
    top: 0px;
    left: 0px;
  }
  .selPic span{
    position: absolute;
    bottom: 0.2333rem;
    width:1.5625rem;
    color: #c4c3c3;
    font-size: 0.28rem;
    left:0px;
    text-align: center;
  }
  .selPic input{
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .imgMask{
    position: absolute;
    height: 100%;
    width:100%;
    top:0px;
    left:0;
    z-index: 100;
    background:rgba(0,0,0,1);
  }
  .num{
    padding-top: 0.2666rem;
    color: white;
    font-size: .875rem;
    font-weight: bold;
  }
  .showImg{
    height: 100%;
    width: 100%;
    position: absolute;
    align-items: center;
    left: 0px;
    top:0;
  }
  .img{
    object-fit: scale-down;
    height: auto;
    width: 100%;
  }
.avatar{
  position: relative;
}
.imgMask{
  width: 100%;
  height: 8rem;
  position: absolute;
  left: none;
  bottom: none;
}
</style>

<template>
  <div class="banner">
    <slide :imgs="imgs"></slide>
    <div class="face">
      <div class="mask"></div>
      <img src="https://avatars0.githubusercontent.com/u/19725568?s=460&v=4" alt="">
    </div>
    <hgroup class="title">
      <h1>路过一只大侠KOA'S BLOG</h1>
      <h2>喜欢吃糖的设计师不是一个好的程序猿</h2>
    </hgroup>
  </div>
</template>

<script>
import Slide from '@/components/slide/slide'
export default {
  data () {
    return {
      imgs: [
        'http://h5.bukeyi.net/h5/lw/blog/imgs/0.jpg',
        'http://h5.bukeyi.net/h5/lw/blog/imgs/1.jpg',
        'http://h5.bukeyi.net/h5/lw/blog/imgs/3.jpg'
      ]
    };
  },
  created() {
    // request imgs
  },
  components: {
    Slide
  }
}
</script>

<style lang="sass" scoped>
  .banner
    position: relative
    .face
      width: 150px
      height: 150px
      position: absolute
      left: 50%
      bottom: 0
      margin-left: -75px
      margin-bottom: -35px
      overflow: hidden
      z-index: 1000
      .mask
        width: 100%
        height: 100%
        background: rgba(0,0,0, .3)
        position: absolute
        border-radius: 50%
      .address
        width: 100%
        height: 50%
        display: flex
        align-items: center
        justify-content: center
        color: #666
        background: rgba(255,255,255, .5)
        text-align: center
        position: absolute
        bottom: 0
        border-radius: 0 0 150px 150px
      img
        width: 100%
        height: 100%
        border-radius: 50%
        border: 4px solid #777
        box-sizing: border-box
  .title
    position: absolute
    z-index: 1000
    top: 100px
    left: 50px
    color: #fff
    h1
      font-size: 30px
      margin-bottom: 10px
    h2
      font-size: 14px
      font-weight: normal
</style>
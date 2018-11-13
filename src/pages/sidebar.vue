<template>
  <scroll class="bar">
    <div class="user">
      <div class="face">
        <img src="@/common/images/sidebar/0.jpg" />
      </div>
      <hgroup class="title">
        <h1>路过一只大侠</h1>
        <h2>喜欢吃糖的设计师不是个好的程序猿</h2>
      </hgroup>
    </div>
    <t-nav />
  </scroll>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import TNav from '@/components/nav/nav'
export default {
  data () {
    return {
    };
  },
  components: {
    Scroll,
    TNav
  }
}
</script>

<style lang='sass' scoped>
  .bar
    width: 300px
    height: 100%
    background: rgba(255,255,255, .5)
  .face
    text-align: center
    height: 100px
    background: url('../common/images/sidebar/1.jpg')
    background-size: cover
    margin-bottom: 50px
    img
      width: 100px
      height: 100px
      display: inline-block
      border-radius: 50%
      transform: translateY(50%)
  .title
    text-align: center
    padding-top: 20px
    color: #444
    h1
      font-size: 26px
      font-weight: bold
      margin-bottom: 10px
    h2
      font-size: 14px
      color: #777
</style>
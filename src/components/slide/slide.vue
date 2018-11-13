<template>
  <div>
    <ul class="list clearfix">
      <li v-for="(url, index) in imgs" class="pull_left img_item"  v-bind:style="{ zIndex: imgs.length - index}" ><img :src="url" /></li>
      <li class="img_base"><img :src="imgs[0]" alt=""></li>
    </ul>
    <div class="mask" v-on:click="next"></div>
    <div class="nav">
      <i class="iconfont icon-jiantou1-copy-copy-copy"></i> 
      <span class="explain">  永恒于刹那间，只隔着我的剑  </span>
      <i class="iconfont icon-jiantou1-copy"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array
    },
    txt: {
      type: Object
    }
  },
  data () {
    return {
      curIndex: 0,
      domImgs: []
    };
  },
  mounted() {
    this.domImgs = document.querySelectorAll('.img_item')
  },
  methods: {
    next() {
      this.curIndex = this.curIndex === this.imgs.length-1 ? 0 : ++this.curIndex
      this.run()
    },
    pre() {
      this.curIndex = his.curIndex === 0 ? this.imgs.length-1 : --this.curIndex
    },
    run() {
      var t_preIndex = this.curIndex === 0 ? this.imgs.length-1 : this.curIndex-1
      
      this.$nextTick(() => {
        this.domImgs[this.curIndex].style.opacity = '1'
        this.domImgs[t_preIndex].style.opacity = '0'
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .list
    font-size: 0
    background: #000
    overflow: hidden
    li
      width: 100%
      img
        width: 100%
      &.img_item
        position: absolute
        left: 0
        top: 0
        transition: opacity 1s
      &.img_base
        opacity: 0
      &.active
        opacity: 1
  .mask
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    background: rgba(0,0,0, .6)
    z-index: 999
  .nav
    display: inline-block
    transform: rotate(-90deg)
    position: absolute
    right: -70px
    top: 50%
    z-index: 9999
    color: #ccc
    font-size: 12px
    .explain
      position: relative
      z-index: 1000
      display: inline-block
      vertical-align: top
      margin: 0 5px
</style>
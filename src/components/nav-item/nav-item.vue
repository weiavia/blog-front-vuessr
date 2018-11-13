<template>
  <div class="item pointer" @mouseenter="showMask = true" @mouseleave="showMask = false">
      <div class="mask" v-show="showMask"/>
      <i class="iconfont" v-bind:class="icon"/>
  </div>
</template>

<script>
export default {
  props: ['icon', 'name'],
  data () {
    return {
      showMask: false
    };
  },
  methods: {

  }
}
</script>

<style lang='sass' scoped>
.item
  width: 60px
  height: 60px
  background: rgba(255,255,255, .5)
  text-align: center
  position: relative
  .mask
    transition: all 3s
  i
    font-size: 30px
  p    
    color: #fff
    position: absolute
    width: 100%
    height: 100%
    z-index: 1
</style>
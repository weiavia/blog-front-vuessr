<template>
  <el-tooltip :content="item.name" placement="top" :enterable="false">
    <div class="item pointer" @mouseenter="showMask = true" @mouseleave="showMask = false" :class="{active: index === current}">
        <div class="mask" v-show="showMask"/>
        <i class="iconfont" v-bind:class="item.icon"/>
    </div>
  </el-tooltip>
</template>

<script>
export default {
  props: ['item', 'index', 'current'],
  data () {
    return {
      showMask: false
    };
  },
  methods: {

  },
  components: {
    
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
  &.active
    background: rgba(0,0,0, .5) !important
    i
      color: #fff
    .mask
      display: none
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
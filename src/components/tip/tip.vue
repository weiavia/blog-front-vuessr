<template>
  <div class="tip" ref="tip" v-show="isShow">
    {{txt}}
    <i class="triangle" ref="triangle"/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      txt: '我是一个tip',
      isShow: false,
      tip: null
    };
  },
  mounted() { 
    this.tip = this.$refs.tip
    this.triangle = this.$refs.triangle
  },
  methods: {
    show(txt = '111111111') {
      this.txt = txt
      this.isShow = true
      document.addEventListener('mousemove', this.change, false)
    },
    hide() {
      this.isShow = false
      document.removeEventListener('mousemout', this.change, false)
    },
    change(e) {
      var tOffsetX = this.triangle.offsetLeft 
      var tOffsetY =  this.tip.offsetHeight + this.triangle.offsetHeight
      this.tip.style.left = e.clientX - tOffsetX + 'px'
      this.tip.style.top = e.clientY - tOffsetY + 'px'
    }
  }
}
</script>

<style lang='sass' scoped>
  .tip
    position: fixed
    padding: 10px
    background: rgba(0,0,0, .9)
    color: #fff
    max-width: 200px
    z-index: 9999
    .triangle
      transform: translate(-50%, 100%)
      display: block
      position: absolute
      bottom: 0
      left: 50%
      border-top: 11px solid rgba(0,0,0, .9)
      border-right: 10px solid transparent
      border-bottom: 10px solid transparent
      border-left: 10px solid transparent
</style>
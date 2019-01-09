<template>
  <div class="top clearfix">
    <i class="iconfont icon-gangbi fr pointer" @click="write" v-show="penShow"/>
    <em class="link_text pointer fr" @click='back' v-show="backShow">BACK</em>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backShow: false,
      penShow: true
    };
  },
  methods: {
    save() {
      window.bus.$emit('save')
    },
    write() {
      this.penShow = false
      this.backShow = true
      this.$router.push({
        path: '/write'
      })
    },
    back() {
      this.penShow = true
      this.backShow = false
      this.$router.back()
    }
  }
}
</script>

<style lang="sass" scoped>
  .top
    color: #666
    height: 35px
    line-height: 35px
    font-size: 12px
    background: rgba(255,255,255, .7)
    margin-bottom: 20px
    box-sizing: border-box
    padding: 0 15px
    z-index: 2
    .link_text
      font-size: 14px
      text-decoration: underline
    .icon-gangbi
      font-size: 22px

</style>
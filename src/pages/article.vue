<template>
  <scroll class="article">
    
  </scroll>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
export default {
  data () {
    return {
      value: '123'
    };
  },
  components: {
    Scroll
  }
}
</script>

<style lang='sass' scoped>
  .article
    background: rgba(255,255,255, .6)
    color: #333
    font-size: 100px
    text-align: center
</style>
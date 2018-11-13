<template>
  <scroll class="article">
    Article
  </scroll>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
export default {
  data () {
    return {
    };
  },
  components: {
    Scroll
  }
}
</script>

<style lang='sass' scoped>
  .article
    background: #eee
    color: #333
    font-size: 100px
    text-align: center
</style>
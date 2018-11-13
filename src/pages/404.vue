<template>
  <scroll class="not_found">
    404
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
  .not_found
    background: #eee
    color: #333
    font-size: 100px
    text-align: center
    line-height: 400px
</style>
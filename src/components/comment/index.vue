<style lang='sass' scoped>
  .container
    padding: 30px
</style>

<template>
  <div class="container">
    <item />
    <item />
    <item />
    <item />
  </div>
</template>

<script>
import Item from '@/components/comment-item/index'
export default {
  props: {
    comment: {
      
    }
  },
  components: {
    Item
  }
}
</script>


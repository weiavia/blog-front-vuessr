<template>
  <div class="mBlock block_item">
    <p class="class">音乐</p>
    <h2 class="title">月半湾</h2>
    <time>2018.06.02</time>
    <div class="avatar mc">
        <img src="./ybw.png" alt="" />
    </div>
    <div class="operate">
      <!-- <i class="iconfont icon-xiaoxi"> 2k</i> -->
      <i class="iconfont icon-bofang "> 927</i>
      <i class="iconfont icon-xihuan pointer"> 2k</i>
    </div>
  </div>
</template>

<script>

export default {
  props: ['music'],
  data () {
    return {
    };
  },
}
</script>

<style lang='sass' scoped>
  .mBlock
    .operate
      border-top: none
    .avatar
      width: 150px
      height: 150px
      border-radius: 50%
      overflow: hidden
      margin-bottom: 50px
      img
        width: 100%
        height: 100%
</style>
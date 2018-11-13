<template>
  <div class="tBlock block_item">
    <p class="class">算法&数据结构</p>
    <h2 class="title">二分查找</h2>
    <time>2018.06.02</time>
    <p class="sketch">{{txt}}</p>
    <div class="readAll" @click="readAll">阅读全文</div>
    <div class="operate">
      <i class="iconfont icon-xiaoxi"> 2k</i>
      <i class="iconfont icon-chakan"> 2k</i>
      <i class="iconfont icon-xihuan"> 2k</i>
    </div>
  </div>
</template>

<script>

export default {
  props: ['txt'],
  data () {
    return {
    };
  },
  methods: {
    readAll() {
      this.$router.push('article')
    }
  }
}
</script>

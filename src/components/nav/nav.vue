<template>
  <div class="nav">
      <div class="list" :class="{hide: !showMore}">
        <nav-item :icon='item.icon' v-for="(item, index) in items" :key="index"/>
      </div>
      <div class="more pointer" @click="showMore=!showMore">{{showMore ? 'hide' : 'more'}}</div>
  </div>
</template>

<script>
import navItem from '@/components/nav-item/nav-item'
export default {
  data () {
    return {
      showMore: false,
      items: [
        {
          name: '大前端',
          icon: 'icon-html'
        },
        {
          name: 'Python',
          icon: 'icon-python'
        },
        {
          name: '算法&数据结构',
          icon: 'icon-zhinengsuanfa'
        },
        {
          name: '数学',
          icon: 'icon-shuxue'
        },
        {
          name: '英语',
          icon: 'icon-yingyushuiping'
        },
        {
          name: '音乐',
          icon: 'icon-yinle'
        }
      ]
    };
  },
  methods: {
    
  },
  components: {
    navItem
  }
}
</script>

<style lang='sass' scoped>
.nav
  margin-top: 30px
  .list
    display: flex
    flex-wrap: wrap
    padding: 0 10px
    &.hide
      height: 70px
      overflow: hidden
    .item
      width: 60px
      height: 60px
      background: rgba(255,255,255, .5)
      margin-bottom: 10px
      margin-right: 13.3333333px
      text-align: center
      line-height: 60px
      position: relative
      &:nth-child(4n)
        margin-right: 0
      i
        font-size: 30px
  .more
    text-align: center
    margin: 0 10px
    background: rgba(255,255,255, .5)
    height: 20px
    line-height: 20px
    color: #888
    font-size: 13px
</style>
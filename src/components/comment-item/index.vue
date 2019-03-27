<style lang='sass' scoped>
  .container 
    font-size: 14px
    display: flex
    padding: 10px 0
    border-bottom: 1px dotted #ccc
    .face
      width: 50px
      height: 50px
      border-radius: 50%
      margin-right: 30px
      flex-wrap: nowrap
    .main
      flex-grow: 1
      .info
        margin-bottom: 10px
      .name
        font-size: 15px
        padding-right: 10px
        display: inline-block
      .time, .icon-shijian
        font-size: 12px
      .text
        font-size: 14px
        line-height: 1.5
        color: #666
      .link_num
        text-align: right
        cursor: pointer
      .iconfont
        font-size: 14px
      .reply_btn
        text-decoration: underline
        color: #666
        margin-left: 15px
    .quote
      width: 100%
      border-radius: 6px
      background: rgba(0,0,0, 0.3)
      margin: 10px 0
      color: #fff
      padding: 10px
      box-sizing: border-box
      font-size: 12px
      .info
        margin-bottom: 10px
      p
        color: #eee
        line-height: 1.5
</style>

<template>
  <div class="container">
    <img class="face" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553607319425&di=76ad6532269991a6ada54fc56286c171&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a3865ab91314a8012062e3c38ff6.png%401280w_1l_2o_100sh.png"/>
    <div class="main">
      
      <div class="info">
        <span class="name">年少不听张学友</span>
        <time class="time"><i class="iconfont icon-shijian" /> 2018.06.02</time>
      </div>
      <p class="text">《一翦梅》，小梅，“那么娴静那么标致，...</p>
      <div class="quote">
        <div class="info">
          路过一只大侠 (7楼) :
        </div>
        <p>十三届全国人大二次会议5日开幕，政协会议已在3日开始举行，独具中国政治特色的两会将在这个时间对这个国家的各项大政方针开展集中讨论。</p>
      </div>
      <div class="link_num">
        <i class="iconfont icon-xihuan" /> 980
        <span class="reply_btn" @click='reply'>回复</span>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/comment-item/index'
export default {
  methods: {
    reply() {
      bus.$emit('reply')
    }
  },
  components: {
    
  }
}
</script>


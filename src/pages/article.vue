<style lang='sass' scoped>
  .article
    background: rgba(255,255,255, .8)
    color: #333
    h1 
      font-size: 30px
      font-weight: bold
      text-align: center
      padding: 30px 0
    .info
      text-align: center
      font-size: 14px
      margin-bottom: 30px
      color: #666
      .iconfont
        font-size: 14px
      .item
        padding: 5px
    .content
      min-height: 300px
      /** 暂时重写子组件样式 **/
      & /deep/ .v-note-wrapper 
        background: none
      & /deep/ .v-note-panel
        border: none
      & /deep/ .v-show-content
        background: none !important
  .operation
    padding: 30px 0 0 30px
    color: #333
    font-size: 16px
    span
      margin-right: 15px
      text-decoration: underline
      cursor: pointer
</style>

<template>
  <scroll class="article" ref="scroller"  v-if="article">
    <h1>{{article.title}}</h1>
    <div class="info">
      <time class="item"><i class="iconfont icon-shijian" /> 2018.06.02 12:20:21</time>
      <span class="look_num item"><i class="iconfont icon-chakan" /> 999+</span>
      <span class="like_num item"><i class="iconfont icon-xihuan" /> 39</span>
      <span class="class item"><i class='iconfont icon-all' /> 大前端</span>
    </div>
    
    <div class="content">
      <mavon-editor  class="v-note-wrapper" v-show="showEditor" 
      fontSize="16px" 
      defaultOpen="preview"
      :boxShadow="boxShadow"
      codeStyle="dark"
      placeholder="烹羊宰牛且为乐，会须一饮三百杯"
      :toolbarsFlag="toolbarsFlag"
      :value="article.content"
      />
    </div>
    <div class="operation">
      <span @click="onComment">写评论</span>
      <span class="construction">分享</span>
      <span class="construction">复制文章URL到剪切板</span>
    </div>
    <comment @reply="onReply" />
    <reply ref="reply"/>
  </scroll>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import Comment from '@/components/comment/index'
import Reply from '@/components/reply/reply'
import { findOneById } from '@/api/block'
import { COMMENT_ARTICLE, COMMENT_REPLY } from '@/config/enum.js'

export default {
  data () {
    return {
      article: null,
      boxShadow: true,
      toolbarsFlag: false,
      showEditor: true
    }
  },

  async created() {
    let article = await findOneById(4)
    this.article = article

    this.$nextTick(() => {
      this.$refs.scroller.refresh()
    })

    bus.$on('reply', () => {
      this.onReply()
    })

  },

  methods: {
    onReply() {
      this.$refs.reply.show(COMMENT_REPLY)
    },
    onComment() {
      this.$refs.reply.show(COMMENT_ARTICLE)
    }
  },
  components: {
    Scroll,
    Comment,
    Reply
  }
}
</script>
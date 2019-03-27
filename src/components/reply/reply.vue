<style lang='sass' scoped>
  .container
    & /deep/ .el-textarea__inner
      min-height: 200px !important
    .input
      width: 300px
      display: block
</style>

<template>
  <div class="container">
    <el-dialog
      :lock-scroll="false"
      :title="title"
      :visible.sync="dialogVisible"
      width="70vw"
      :center="true"
      :before-close="handleClose">
      <el-form ref="form" :model="form" labelPosition="top" label-width="80px">
        <el-input v-model="form.concat" placeholder="留下你的联系方式 QQ / EMAIL 都行" class="input mb10"></el-input>
        <el-form-item>
          <el-input type="textarea" v-model="form.text" class="mb10" placeholder="内容写在这"/>
          <el-button type="primary">写完了</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { COMMENT_ARTICLE, COMMENT_REPLY } from '@/config/enum.js'
export default {
  data () {
    return {
      dialogVisible: false,
      text: '',
      form: {
        concat: '',
        text: ''
      },
      title: ''
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
    },
    show(type) {
      if(type === COMMENT_ARTICLE) {
        this.title = '自古评论出淫才'
      } else {
        this.title = '回复年少不听张学友的评论'
      }
      this.dialogVisible = true
    }
  }
}
</script>
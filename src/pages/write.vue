<template>
  <div class="write" v-loading="loading" style="position: relative;">
    <input type="text" class="title" placeholder="将进酒" v-model="title"/>
    <input type="text" class="desc" placeholder="君不见，黄河之水天上来，奔流到海不复回  君不见，高堂明镜悲白发，朝如青丝暮成雪" v-model="described"/>
    <mavon-editor v-model="value" class="v-note-wrapper" v-show="showEditor" 
      fontSize="16px" 
      defaultOpen="edit"
      :boxShadow="boxShadow"
      :toolbars="toolbars"
      :ishljs = "ishljs"
      placeholder="烹羊宰牛且为乐，会须一饮三百杯"
      :toolbarsFlag="toolbarsFlag"
      @save="save"
    />
  </div>
</template>

<script>
import toolbars from '@/config/editor'
import { write } from '@/api/block'

export default {
  data () {
    return {
      title: '',
      described: '',
      value: '',
      boxShadow: false,
      toolbars: toolbars,
      ishljs: true,
      toolbarsFlag: true,
      loading: false,
      showEditor: false
    };
  },
  mounted() {
    bus.$on('save', this.save)
    this.showEditor = true
  },
  methods: {
    async save(v, r) {
      let data = {
        content: v,
        title: this.title,
        subTitle: this.described
      }
      this.value = v + 1
      this.loading = true

      await write(data)
      this.$message('save ok');
      this.loading = false
    }
  }
}
</script>

<style lang='sass' scoped>
  .write
    background: #fff
    color: #333
    .title
      border: none
      height: 50px
      width: 100%
      padding: 0 15px
      outline: none
      font-size: 20px
      box-sizing: border-box
      border-bottom: 1px solid #eee
    .desc
       box-sizing: border-box
       padding: 0 15px
       border: none
       outline: none
       height: 50px
       line-height: 50px
       width: 100%
  .v-note-wrapper
    height: calc(100% - 100px)
</style>
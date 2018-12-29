<template>
  <div class="write">
    <input type="text" class="title" placeholder="一篇诗、一斗洒"/>
    <input type="text" class="desc" placeholder="将进酒、杯莫停"/>
    <mavon-editor v-model="value" class="v-note-wrapper" 
      fontSize="16px" 
      defaultOpen="edit"
      :boxShadow="boxShadow"
      :toolbars="toolbars"
      :ishljs = "ishljs"
      codeStyle="atelier-dune-dark"
    />
  </div>
</template>

<script>
import toolbars from '@/config/editor'
export default {
  data () {
    return {
      value: '123',
      boxShadow: false,
      toolbars: toolbars,
      ishljs: true
    };
  },
}
</script>

<style lang='sass' scoped>
  .write
    background: rgba(255,255,255, .6)
    color: #333
    .title
      border: none
      height: 50px
      width: 100%
      padding-left: 23px
      outline: none
      font-size: 20px
      box-sizing: border-box
      border-bottom: 1px solid #eee
    .desc
       box-sizing: border-box
       padding-left: 23px
       border: none
       outline: none
       height: 50px
       line-height: 50px
       width: 100%

  .v-note-wrapper
    height: 100%

</style>
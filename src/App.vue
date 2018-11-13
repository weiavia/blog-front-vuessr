<template>
  <div class="container clearfix">
    <div class="fl main">
      <top />
      <keep-alive>
        <router-view class="content" />
      </keep-alive>
    </div>
    <sidebar class="fr"/>
  </div>
</template>

<script>
import Top from 'components/top/top'
import Sidebar from 'pages/sidebar'

export default {
  components: {
    Top,
    Sidebar
  }
}
</script>

<style lang="sass" scoped>
  .container
    box-sizing: border-box
    height: 100%
    width: 100%
    max-width: 1300px
    margin: 0 auto
    padding: 0 15px
    .content
      height: calc(100% - 50px)
    .main
      width: calc(100% - 320px)
      height: 100%
</style>
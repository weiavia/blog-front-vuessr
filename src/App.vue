<template>
  <div style="width: 100%; height: 100%;">
    <div id="particles" class="particles"/>
    <div class="container clearfix" id="container">
      <!-- <div class="appShade"/> -->
      <div class="fl main">
        <top />
        <transition name="bounce" appear
          appear-active-class="appear-active"
          appear-to-class="appear-end"
          appear-class="appear-start"
        >
          <keep-alive>
            <router-view class="content" />
          </keep-alive>
        </transition>
      </div>
      <!-- <sidebar class="fr" /> -->
    </div>
  </div>
</template>

<script>
import Top from 'components/top/top'
import Sidebar from 'pages/sidebar'
import ParticlesConfig from '@/config/particles.json'

export default {
  mounted() {
    particlesJS('particles', ParticlesConfig);
  },
  components: {
    Top,
    Sidebar
  }
}
</script>

<style lang="sass" scoped>
  .bounce-enter-active 
    animation: fadeInUp .9s
  .bounce-leave-active 
    animation: rotateOut .5s
  .appear-active
    transition: opacity .5s
  .appear-start
    opacity: 0
  .appear-end
    opacity: 1
    
  .particles
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
  .container
    box-sizing: border-box
    height: 100%
    width: 100%
    max-width: 1300px
    margin: 0 auto
    padding: 0 15px
    position: relative
    display: flex
    justify-content: space-between
    .content
      height: calc(100% - 50px)
    .main
      width: calc(100% - 320px)
      height: 100%
      flex-grow: 1
</style>
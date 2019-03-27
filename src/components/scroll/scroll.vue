<template>
  <div class="scroll" ref="container">
    <slot />
  </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css'

export default {
  data () {
    return {
			container: null
    };
  },
  mounted() {
		this.container = this.$refs.container
		this.scroller = null
		this.init()
	},
	methods: {
		init() {
			this.scroller = new PerfectScrollbar(this.container, {})
		},
		refresh() {
			this.scroller.update()
		}
	}
}
</script>

<style lang='sass' scoped>
	.scroll
		overflow: hidden
		height: 100%
		position: relative
</style>
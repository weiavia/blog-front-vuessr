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
		this.init()
	},
	methods: {
		init() {
			new PerfectScrollbar(this.container, {

			})
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
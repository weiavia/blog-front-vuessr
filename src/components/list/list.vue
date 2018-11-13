<template>
  <scroll class="block">
    <div ref="wrapper" class="container">
      <div class="list" ref="content">
        <t-block :txt="item"  v-for="(item, index) in data" :key="index" class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
        <m-block  class="item"/>
      </div>
      <div class="bottom_line">我是有底线的</div>
    </div>
  </scroll>
</template>

<script>
import TBlock from '@/blocks/text'
import MBlock from '@/blocks/music'
import Scroll from '@/components/scroll/scroll'

export default {
  props: {
    list: {
      type: Array,
      defalut: []
    }
  },
  data () {
    return {
      column: 3,
      columnWidth: 303.33333,
      columnGap: 20,
      data: [
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在  dsdf 高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
        '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰：“善哉，峨峨兮若泰山！”期死，伯牙谓世再无知音，乃破琴绝弦，终身不复鼓。',
      ]
    };
  },
  mounted() {
    this.items = document.getElementsByClassName('block_item')
    this.flag = true
    this.waterFall()

    window.addEventListener('resize', () => {
      if(!this.flag)
        return
      setTimeout(() => {
        this.waterFall()
        
      }, 300)
    })
  },
  methods: {
    waterFall() {
      this.column = Math.max( Math.floor( this.$refs.wrapper.offsetWidth / this.columnWidth ), 1)
      this.$refs.content.style.width = this.columnWidth * this.column + ((this.column-1) * this.columnGap) + 'px'
      this.hState = []
      let index = 0
      let items = [].slice.call(this.items)
      items.forEach((item, i) => {
        if(i < this.column) {
          item.style.top = 0 + 'px'
          item.style.left = i * (this.columnWidth + this.columnGap) + 'px'
          this.hState.push(item.offsetHeight)
        } else {
          let min = this.getMin()
          item.style.left = min.index * (this.columnWidth + this.columnGap) + 'px'
          item.style.top = min.value + 20 + 'px'
          this.hState[min.index] = min.value + item.offsetHeight + 20
        }
      })
      this.flag = true

      var max = this.getMin(true)
      this.$refs.wrapper.style.height = max.value + 'px'
    },
    getMin(reversal = false) {
      var o = {
        index: 0,
        value: this.hState[0]
      }
      this.hState.forEach((v, i) => {
        if(v < o.value && !reversal) {
          o.index = i
          o.value = v
        } else if(v > o.value && reversal) {
          o.index = i
          o.value = v
        }
      })
      return o
    }
  },
  components:{
    TBlock,
    MBlock,
    Scroll
  }
}
</script>

<style lang='sass' scoped>
.block
  .container
    position: relative
    padding-bottom: 60px
  .list
    position: relative
    margin: 0 auto
    
    .item
      width: 303.33333px
      position: absolute
      transition: all .3s
  .bottom_line
    width: 100%
    border-bottom: 2px solid #eee
    text-align: center
    font-size: 14px
    color: #ccc
    padding-bottom: 10px
    position: absolute
    bottom: 0
    left: 0
</style>
<template>
  <list />
</template>

<script>

import List from '@/components/list/list'

export default {
  data () {
    return {
     
    };
  },
  created() {
    console.log('home created')
  },
  mounted() {
    console.log('home mounted')
  },
  methods: {
    
  },
  components:{
    List,
  }
}
</script>

<style lang='sass' scoped>

</style>
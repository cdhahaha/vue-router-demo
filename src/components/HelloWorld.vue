<template>
  <div>
    <Debug></Debug>
    <ul id='name'>
      <li v-for="(item, index) in items" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
import Debug from './debug'
import Mixin from './chend.js'
export default {
  mixins: [Mixin],
  chend: 'chenddd',
  data () {
    return {
      items: [1, 2, 3, 4, 5]
    }
  },
  components: {
    Debug
  },
  methods: {
    test () {
      console.log(this.$options.chend)
    }
  },
  mounted () {
    this.test()
  }
}
</script>

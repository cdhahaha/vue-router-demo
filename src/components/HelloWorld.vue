<template>
  <div>
    <Debug></Debug>
  </div>
</template>
<script>
import Debug from './debug'
import Mixin from './chend.js'
export default {
  mixins: [Mixin],
  components: {
    Debug
  },
  mounted () {
    this.test()
  }
}
</script>

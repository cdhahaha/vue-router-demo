<template>
  <div>
    内容: {{chend}}
    <chen-demo level='1'>
      hi
    </chen-demo>
  </div>
</template>
<script>
export default {
  data () {
    return {
      chend: ''
    }
  },
  mounted () {
    this.chend = this.$route.params
  },
  beforeRouteUpdate (to, from, next) {
    this.chend = to.path
  },
  components: {
    chenDemo: {
      render (h) {
        return h('p', [h('a', {}, this.$slots.default)])
      },
      props: {
        level: {}
      }
    }
  }
}
</script>
<style>
  .mf {}
</style>

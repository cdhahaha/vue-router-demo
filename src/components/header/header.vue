<template>
  <div>
    <Render :render="Render" name="hi">
    </Render>
  </div>
</template>
<script>
import Render from './render.js'
export default {
  data () {
    return {
      Render (h, ctx) {
        return h('input', {
          attrs: {
            value: ctx.props.name
          }
        })
      }
    }
  },
  components: {
    Render
  }
}
</script>

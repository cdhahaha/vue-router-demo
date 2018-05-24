export default {
  name: 'render',
  functional: true,
  props: {
    render: Function,
    name: String,
    data: Object
  },
  render: (h, ctx) => {
    return ctx.props.render(h, ctx)
  }
}

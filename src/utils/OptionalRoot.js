const OptionalRoot = {
  functional: true,
  props: ['show'],
  render(h, ctx) {
    if (ctx.props.show) {
      return ctx.children[0];
    }

    return ctx.children[0].children;
  },
};

export default OptionalRoot;

<template>
  <input
    class="VuelmaForm__input input"
    v-bind="$props"
    :id="name"
    @input="input"
  >
</template>

<script>
import Control from './Control';

export default {
  name: 'input-control',
  extends: {
    props: {
      ...Control.props,
    },
    methods: {
      ...Control.methods,
    },
  },
};
</script>

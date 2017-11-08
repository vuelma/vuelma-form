<template>
  <input
    class="VuelmaForm__number input"
    v-bind="$props"
    :id="name"
    @input="input"
    @blur.stop="onBlur"
    @focus.stop="onFocus"
  >
</template>

<script>
import Control from './Control';

export default {
  name: 'number-control',
  extends: Control,
  props: {
    /**
     * Parse the value to Number.
     */
    isNumber: Boolean,
  },
  methods: {
    /**
     * Handle the change input value event.
     */
    input(event) {
      const { value, name } = event.target;
      this.emit(name, this.isNumber ? Number(value) : value);
    },
  },
};
</script>

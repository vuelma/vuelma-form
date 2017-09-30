<template>
  <input
    class="VuelmaForm__number input"
    v-bind="$props"
    :id="name"
    @input="input"
  >
</template>

<script>
import Control from './Control';
import bus from '../utils/bus';

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
      bus.$emit('update:model', {
        name,
        value: this.isNumber ? Number(value) : value,
      });
    },
  },
};
</script>

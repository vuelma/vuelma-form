<template>
  <label class="checkbox">
    <input
      class="VuelmaForm__input"
      v-bind="$props"
      :id="name"
      @change="input"
    >
    {{ label }}
  </label>
</template>

<script>
import Control from './Control';
import bus from '../utils/bus';

export default {
  name: 'input-control',
  extends: Control,
  props: {
    /**
     * The label of the checkbox.
     */
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    /**
     * Handle the change input value event.
     */
    input(event) {
      bus.$emit('update:model', {
        name: event.target.name,
        value: event.target.checked,
      });
    },
  },
};
</script>

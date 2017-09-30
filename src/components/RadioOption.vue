<template>
  <label class="radio">
    <input
      class="VuelmaForm__radio"
      v-bind="$props"
      :id="name"
      @change="input"
    >
    {{ label }}
  </label>
</template>

<script>
import Control from './Control';

export default {
  name: 'radio-control',
  extends: Control,
  props: {
    /**
     * The label of the checkbox.
     */
    label: {
      type: String,
      required: true,
    },

    /**
     * Native HTML attributes for option.
     */
    checked: Boolean,
  },
};
</script>

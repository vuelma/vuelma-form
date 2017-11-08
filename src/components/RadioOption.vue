<template>
  <label class="radio" :disabled="disabled">
    <input
      class="VuelmaForm__radio"
      v-bind="$props"
      :id="name"
      @change="input"
      @blur.stop="onBlur"
      @focus.stop="onFocus"
    >
    {{ label }}
  </label>
</template>

<script>
import Control from './Control';

export default {
  name: 'radio-option',
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
    disabled: Boolean,
  },
};
</script>

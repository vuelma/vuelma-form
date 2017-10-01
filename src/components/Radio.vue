<template>
  <div class="control">
    <radio-option
      v-for="option in options"
      v-bind="option"
      :key="option.value"
      :name="name"
      :type="type"
      :checked="option.value === value"
      :disabled="option.disabled || disabled"
    ></radio-option>
  </div>
</template>

<script>
import RadioOption from './RadioOption';
import Control from './Control';

export default {
  name: 'radio-control',
  extends: Control,
  components: {
    RadioOption,
  },
  props: {
    /**
     * The options for the select control.
     */
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

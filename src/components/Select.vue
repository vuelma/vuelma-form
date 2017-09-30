<template>
  <div class="VuelmaForm__select select">
    <select
      :id="name"
      :name="name"
      @input="input"
    >
      <select-option
        disabled
        selected
        :label="placeholder"
        value=""
      ></select-option>
      <select-option
        v-for="option in options"
        :key="option.value"
        v-bind="option"
      ></select-option>
    </select>
  </div>
  </div>
</template>

<script>
import Control from './Control';
import SelectOption from './SelectOption';

export default {
  name: 'select-control',
  extends: Control,
  components: {
    SelectOption,
  },
  props: {
    /**
     * The options for the select control.
     */
    options: {
      type: Array,
      required: true,
    },

    /**
     * The placeholder label for the default option.
     */
    placeholder: String,
  },
};
</script>

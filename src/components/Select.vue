<template>
  <div class="VuelmaForm__select select" :class="{ 'is-loading': loading }">
    <select
      :id="name"
      :name="name"
      :value="value"
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

    /**
     * Attach loading state to select control.
     */
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

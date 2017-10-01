<template>
  <div
    class="VuelmaForm__select select"
    :class="selectModifiers"
  >
    <select
      v-bind="$props"
      v-model="mutableValue"
      :id="name"
      @input="input"
    >
      <select-option
        disabled
        selected
        v-if="!multiple && this.placeholder !== false"
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
    placeholder: {
      type: [String, Boolean],
      default: false,
    },

    /**
     * Attach loading state to select control.
     */
    loading: {
      type: Boolean,
      default: false,
    },

    /**
     * Native HTML attributes for select.
     */
    multiple: Boolean,
    size: Number,
  },
  data() {
    return {
      mutableValue: this.value === undefined ? [] : this.value,
    };
  },
  computed: {
    selectModifiers() {
      return {
        'is-loading': this.loading,
        'is-multiple': this.multiple,
      };
    },
  },
  watch: {
    value() {
      this.mutableValue = this.value;
    },
  },
  methods: {
    input(event) {
      const { name, selectedOptions, value } = event.target;
      const values = [...selectedOptions].map(option => option.value);
      this.emit(name, this.multiple ? values : value);
    },
  },
};
</script>

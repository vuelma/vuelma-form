<template>
  <div class="VuelmaForm__select select">
    <select
      v-bind="$props"
      :id="name"
      @input="input"
    >
      <option-control
        disabled
        selected
        :label="placeholder"
        value=""
      ></option-control>
      <option-control
        v-for="option in options"
        :key="option.value"
        v-bind="option"
      ></option-control>
    </select>
  </div>
  </div>
</template>

<script>
import Control from './Control';
import OptionControl from './Option';

export default {
  name: 'select-control',
  extends: Control,
  components: {
    OptionControl,
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

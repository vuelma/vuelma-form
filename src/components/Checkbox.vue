<template>
  <label class="VuelmaForm__checkbox checkbox">
    <input
      v-bind="$props"
      :id="name"
      :checked="value"
      @change="input"
    >
    {{ label }}
  </label>
</template>

<script>
import Control from './Control';

export default {
  name: 'checkbox-control',
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
     * Native HTML attributes for checkbox.
     */
    disabled: Boolean,
  },
  methods: {
    /**
     * Handle the change input value event.
     */
    input(event) {
      const { name, checked: value } = event.target;
      this.emit(name, value);
    },
  },
};
</script>

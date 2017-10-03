<template>
  <option
    v-bind="$props"
    v-text="label"
  ></option>
</template>

<script>
export default {
  name: 'select-option',
  props: {
    /**
     * The value associated with the option.
     */
    value: {
      type: [String, Boolean, Number],
      required: true,
    },

    /**
     * The display text of the option.
     */
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

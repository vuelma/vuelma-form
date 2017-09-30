<template>
  <option
    v-bind="$props"
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
  },
};
</script>

<template>
  <div class="TextField field">
    <div class="control">
      <input
        class="input"
        :type="inputType"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'text-field',
  props: {
    /**
     * The bound data from the form component.
     */
    value: {
      type: String,
      reqiured: true,
    },

    /**
     * The placeholder text if the field is empty.
     */
    placeholder: {
      type: String,
    },

    inputType: {
      type: String,
      default: 'text',
    },
  },
};
</script>

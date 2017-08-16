<template>
  <div class="TextField field">
    <div class="control">
      <input
        class="input"
        :class="classNames"
        :type="inputType"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
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
     * The type of the input field.
     */
    inputType: {
      type: String,
      default: 'text',
    },

    /**
     * The class names that will be appended to the input field.
     */
    classNames: [String, Array],

    /**
     * The placeholder text if the field is empty.
     */
    placeholder: String,

    /**
     * Determines whether to disable the input field or not.
     */
    disabled: Boolean,

    /**
     * Determines whether to the input field is readonly or not.
     */
    readonly: Boolean,
  },
};
</script>

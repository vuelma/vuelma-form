<template>
  <div
    class="control"
    :class="{ 'has-icons-left': hasIconsLeft, 'has-icons-right': hasIconsRight }"
  >
    <template v-if="inputType === 'textarea'">
      <textarea
        class="textarea"
        :class="hasErrors ? ['is-danger', ...classNames] : classNames"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :rows="rows"
        @input="$emit('input', $event.target.value)"
      ></textarea>
    </template>

    <template v-else>
      <input
        class="input"
        :class="hasErrors ? ['is-danger', ...classNames] : classNames"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        @input="$emit('input', $event.target.value)"
      >
    </template>

    <span class="icon is-left" v-if="hasIconsLeft">
      <i :class="`fa fa-${this.iconLeft}`"></i>
    </span>
    <span class="icon is-right" v-if="hasIconsRight">
      <i :class="`fa fa-${this.iconRight}`"></i>
    </span>

    <p
      class="help is-danger"
      v-for="error in errors"
      :key="error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'input-field',
  props: {
    /**
     * The bound data from the form component.
     */
    value: {
      type: String,
      reqiured: true,
    },

    /**
     * The input/field type of the component.
     */
    inputType: {
      type: String,
      default: 'text',
    },

    /**
     * The form errors associated with the component.
     */
    errors: {
      type: Array,
      default: () => ([]),
    },

    /**
     * The name of the component.
     */
    name: String,

    /**
     * The icon(s) that will be added as addons.
     */
    icon: [String, Object],

    /**
     * The class names that will be appended to the component.
     */
    classNames: [String, Array],

    /**
     * The placeholder text if the field is empty.
     */
    placeholder: String,

    /**
     * Determines whether to disable the component or not.
     */
    disabled: Boolean,

    /**
     * Determines whether the component is readonly or not.
     */
    readonly: Boolean,

    /**
     * The number of rows of a textarea.
     */
    rows: Number,
  },
  computed: {
    hasIconsLeft() {
      return (typeof this.icon === 'string')
        || (typeof this.icon === 'object' && !!this.icon.left);
    },
    hasIconsRight() {
      return (typeof this.icon === 'object' && !!this.icon.right);
    },
    iconLeft() {
      if (!this.hasIconsLeft) {
        return null;
      }

      return (typeof this.icon === 'string') ? this.icon : this.icon.left;
    },
    iconRight() {
      if (!this.hasIconsRight) {
        return null;
      }

      return this.icon.right;
    },
    hasErrors() {
      return this.errors.length > 0;
    },
  },
};
</script>

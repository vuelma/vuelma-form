<template>
  <div
    class="control"
    :class="{ 'has-icons-left': hasIconsLeft, 'has-icons-right': hasIconsRight }"
  >
    <template v-if="inputType === 'textarea'">
      <textarea
        class="textarea"
        :class="finalClassNames"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :rows="rows"
        @input="handleChange"
      ></textarea>
    </template>

    <template v-else-if="inputType === 'select'">
      <div
        class="select"
        :class="finalClassNames"
      >
        <select
          :value="value"
          :multiple="multiple"
          :size="multiple ? size : null"
          @change="handleChange"
        >
          <option
            disabled
            selected
            value=""
            v-if="!!placeholder"
            v-text="placeholder"
          ></option>
          <option
            v-for="option in options"
            v-text="option.label"
            :value="option.value"
            :key="option.value"
          ></option>
        </select>
      </div>

      <div class="icon is-left">
        <i :class="`fa fa-${iconLeft}`"></i>
      </div>
    </template>

    <template v-else>
      <input
        class="input"
        :class="finalClassNames"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        @input="handleChange"
      >
    </template>

    <span class="icon is-left" v-if="hasIconsLeft">
      <i :class="`fa fa-${iconLeft}`"></i>
    </span>
    <span class="icon is-right" v-if="hasIconsRight">
      <i :class="`fa fa-${iconRight}`"></i>
    </span>

    <p
      class="help is-danger"
      v-for="error in errors"
      v-text="error"
      :key="error"
    ></p>
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
      type: [String, Number, Array],
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
     * Determine whether the emitted value should be parsed as Number.
     */
    isNumber: Boolean,

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

    /**
     * The array containing the options for the select control.
     */
    options: {
      type: Array,
      default: () => ([]),
    },

    /**
     * Determine whether the select is multiple or not.
     */
    multiple: Boolean,

    /**
     * The size of the displayed items on "multiple" select control
     */
    size: {
      type: Number,
      default: 5,
    },
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
    finalClassNames() {
      const classNames = (typeof this.classNames === 'string') ? this.classNames.split(' ') : this.classNames;

      if (this.hasErrors) {
        classNames.push('is-danger');
      }

      if (this.multiple) {
        classNames.push('is-multiple');
      }

      return classNames;
    },
  },
  methods: {
    handleChange(event) {
      let value;
      if (this.multiple) {
        value = [...event.target.options]
          .filter(option => option.selected)
          .map(option => option.value);
      } else {
        value = event.target.value;
      }

      if (this.isNumber) {
        if (typeof value === 'object') {
          value = value.map(item => parseInt(item, 10));
        } else {
          value = parseInt(value, 10);
        }
      }

      this.$emit('input', value || null);
    },
  },
};
</script>

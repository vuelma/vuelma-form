<template>
  <div
    class="field"
    :class="{
      'is-horizontal': horizontal,
      'has-addons': hasAddonsLeft || hasAddonsRight,
    }"
  >
    <optional-root :show="horizontal">
      <div class="field-label" :class="fieldLabelClassName">
        <label
          class="label"
          v-if="label && type !== 'checkbox'"
        >
          {{ label }}
        </label>
      </div>
    </optional-root>

    <optional-root :show="horizontal">
      <div class="field-body">
        <optional-root :show="horizontal">
          <div class="field">
            <div
              class="control"
              :class="{ 'has-icons-left': hasIconsLeft, 'has-icons-right': hasIconsRight }"
            >
              <template v-if="type === 'textarea'">
                <textarea
                  class="textarea"
                  v-bind="$props"
                  :id="name"
                  :class="finalClassNames"
                  :maxlength="maxlength === 255 ? 0 : maxlength"
                  @input="handleChange"
                ></textarea>
              </template>

              <template v-else-if="type === 'select'">
                <div
                  class="select"
                  :class="finalClassNames"
                >
                  <!-- FIXME: multiple selection not being rendered thru v-bind -->
                  <select
                    v-bind="$props"
                    :id="name"
                    :size="multiple ? size : null"
                    @input="handleChange"
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

                <div class="icon is-left" v-if="hasIconsLeft">
                  <i :class="`fa fa-${iconLeft}`"></i>
                </div>
              </template>

              <template v-else-if="type === 'checkbox'">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    :id="name"
                    :checked="value"
                    @change="handleChange"
                  >
                  {{ label }}
                </label>
              </template>

              <template v-else-if="type === 'radio'">
                <template v-for="(option, index) in options">
                  <label
                    class="radio"
                    :key="option.name"
                    :disabled="option.disabled"
                  >
                    <input
                      type="radio"
                      v-bind="option"
                      :id="`${name}${index}`"
                      :checked="value === option.value"
                      @change="handleChange"
                    >
                    {{ option.label }}
                  </label>
                </template>
              </template>

              <template v-else-if="type === 'file'">
                <div class="file" :class="finalClassNames">
                <label class="file-label">
                  <input
                    type="file"
                    class="file-input"
                    v-bind="$props"
                    :id="name"
                    @change="handleChange"
                  >
                  <span class="file-cta">
                    <span class="file-icon">
                      <i :class="`fa fa-${iconLeft || 'upload'}`"></i>
                    </span>
                    <span class="file-label" v-text="placeholder"></span>
                  </span>
                  <span
                    class="file-name"
                    v-if="!!value"
                    v-text="value.name"
                  ></span>
                </label>
              </div>
              </template>

              <template v-else>
                <input
                  class="input"
                  v-bind="$props"
                  :id="name"
                  :class="finalClassNames"
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
          </div>
        </optional-root>
      </div>
    </optional-root>
  </div>
</template>

<script>
const OptionalRoot = {
  functional: true,
  props: ['show'],
  render(h, ctx) {
    if (ctx.props.show) {
      return ctx.children[0];
    }

    return ctx.children[0].children;
  },
};

export default {
  name: 'input-field',
  components: { OptionalRoot },
  props: {
    /**
     * The bound data from the form component.
     */
    value: {
      type: [String, Number, Array, Boolean, File],
      reqiured: true,
    },

    /**
     * The input/field type of the component.
     */
    type: {
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
     * The datatype of the emitted value.
     */
    datatype: {
      type: Function,
      default: String,
    },

    /**
     * The name of the component.
     */
    name: String,

    /**
     * The label associated with the component.
     */
    label: String,

    /**
     * The icon(s) that will be added as addons.
     */
    icon: [String, Object],

    /**
     * The class names that will be appended to the component.
     */
    classNames: {
      type: [String, Array],
      default: () => ([]),
    },

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
     * The array containing the options for the select/radio control.
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

    /**
     * Determine whether the form is horizontal or not.
     */
    horizontal: Boolean,

    /**
     * The form addons to attach to the form control.
     */
    addons: {
      type: [Object, Array],
      default: null,
    },

    /**
     * The maximum number of characters allowable on a field.
     */
    maxlength: {
      type: Number,
      default: 255,
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
    fieldLabelClassName() {
      if (this.finalClassNames.includes('is-small')) {
        return 'is-small';
      }

      if (this.finalClassNames.includes('is-medium')) {
        return 'is-medium';
      }

      if (this.finalClassNames.includes('is-large')) {
        return 'is-large';
      }

      return 'is-normal';
    },
    hasAddonsLeft() {
      return this.addons && (typeof this.addons === 'object' || !!this.addons.left);
    },
    hasAddonsRight() {
      return this.addons && (typeof this.addons === 'object' && !!this.addons.right);
    },
  },
  methods: {
    handleChange(event) {
      let value;
      if (this.type === 'checkbox') {
        this.$emit('input', event.target.checked);

        return;
      }

      if (this.type === 'file') {
        if (event.target.files.length > 0) {
          this.$emit('input', event.target.files[0]);

          return;
        }
      }

      if (this.multiple) {
        value = [...event.target.selectedOptions].map(option => option.value);
      } else {
        value = event.target.value;
      }

      if (typeof value === 'object') {
        value = value.map(item => this.datatype(item));
      } else {
        value = this.datatype(value);
      }

      this.$emit('input', value || null);
    },
  },
};
</script>

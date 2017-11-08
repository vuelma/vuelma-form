<template>
  <div class="VuelmaForm__field field" :class="{ 'is-horizontal': horizontal }">
    <slot>
      <optional-root :show="horizontal">
        <div class="field-label" :class="fieldLabelModifiers">
          <label
            class="label"
            v-if="shouldDisplayLabel"
            :for="field.name"
          >
            {{ label | snakeToTitle }}
          </label>
        </div>
      </optional-root>

      <optional-root :show="horizontal">
        <div class="field-body">
          <optional-root :show="horizontal">
            <div class="field">
              <div class="control" :class="controlModifiers">
                <component
                  v-bind="field"
                  :is="controlType"
                  :class="modifiers"
                  :value="value"
                  :disabled="disabled"
                  @update:model="updateModel"
                  @blur="onBlur"
                  @focus="onFocus"
                ></component>

                <icon-component
                  class="is-left"
                  v-if="hasIconsLeft"
                  :name="field.iconLeft || field.icon"
                ></icon-component>
                <icon-component
                  class="is-right"
                  v-if="hasIconsRight"
                  :name="field.iconRight"
                ></icon-component>
              </div>

              <p
                class="help is-danger"
                v-for="error in errors"
                v-text="error"
                :key="error"
              ></p>
            </div>
          </optional-root>
        </div>
      </optional-root>
    </slot>
  </div>
</template>

<script>
import InputControl from './Input';
import TextareaControl from './Textarea';
import SelectControl from './Select';
import CheckboxControl from './Checkbox';
import RadioControl from './Radio';
import FileControl from './File';
import NumberControl from './Number';
import IconComponent from './Icon';
import OptionalRoot from '../utils/OptionalRoot';
import snakeToTitle from '../filters/snakeToTitle';

const pushSizeModifier = (modifiers, referenceModifiers) => {
  if (referenceModifiers.includes('is-small')) {
    modifiers.push('is-small');
  } else if (referenceModifiers.includes('is-medium')) {
    modifiers.push('is-medium');
  } else if (referenceModifiers.includes('is-large')) {
    modifiers.push('is-large');
  } else {
    modifiers.push('is-normal');
  }
};

export default {
  name: 'vuelma-field',
  components: {
    InputControl,
    TextareaControl,
    SelectControl,
    CheckboxControl,
    RadioControl,
    FileControl,
    NumberControl,
    IconComponent,
    OptionalRoot,
  },
  props: {
    /**
     * The metadata of the field component.
     */
    field: {
      type: Object,
      required: true,
    },

    /**
     * The value associated with the control.
     */
    value: {
      required: true,
    },

    /**
     * The errors associated with the field.
     */
    errors: {
      type: Array,
    },

    /**
     * Append the is-loading modifier to control.
     */
    loading: Boolean,

    /**
     * Disable the form control.
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  filters: {
    snakeToTitle,
  },
  computed: {
    controlType() {
      switch (this.field.type) {
        case 'text':
        case 'password':
        case 'email':
        case 'tel':
          return 'input-control';
        default:
          return `${this.field.type}-control`;
      }
    },
    shouldDisplayLabel() {
      return this.field.type !== 'checkbox';
    },
    label() {
      if (this.field.label === undefined) {
        return this.field.name;
      }

      return this.field.label;
    },
    modifiers() {
      let modifiers;
      if (typeof this.field.modifiers === 'string') {
        modifiers = [this.field.modifiers];
      } else {
        modifiers = [].concat(this.field.modifiers);
      }

      if (this.errors) {
        modifiers.push('is-danger');
      }

      return modifiers;
    },
    controlModifiers() {
      const controlModifiers = [];

      if (this.loading) {
        controlModifiers.push('is-loading');
        pushSizeModifier(controlModifiers, this.modifiers);
      }

      if (this.hasIconsLeft) {
        controlModifiers.push('has-icons-left');
      }

      if (this.hasIconsRight) {
        controlModifiers.push('has-icons-right');
      }

      return controlModifiers;
    },
    fieldLabelModifiers() {
      const labelModifiers = [];
      if (this.horizontal) {
        pushSizeModifier(labelModifiers, this.modifiers);
      }

      return labelModifiers;
    },
    hasIconsLeft() {
      return this.field.iconLeft || this.field.icon;
    },
    hasIconsRight() {
      return this.field.iconRight;
    },
  },
  methods: {
    updateModel(payload) {
      this.$emit('update:model', payload);
    },
    onBlur(name) {
      this.$emit('blur', name);
    },
    onFocus(name) {
      this.$emit('focus', name);
    },
  },
};
</script>

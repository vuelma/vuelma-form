<template>
  <div class="VuelmaForm__field field">
    <slot>
      <label
        class="label"
        v-if="shouldDisplayLabel"
        :for="field.name"
      >
        {{ label | snakeToTitle }}
      </label>

      <div class="control" :class="controlModifiers">
        <component
          :is="controlType"
          v-bind="field"
          :class="modifiers"
          :value="value"
        ></component>
      </div>

      <p
        class="help is-danger"
        v-for="error in errors"
        v-text="error"
        :key="error"
      ></p>
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
      return (this.field.type !== 'checkbox');
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

        if (this.modifiers.includes('is-small')) {
          controlModifiers.push('is-small');
        } else if (this.modifiers.includes('is-medium')) {
          controlModifiers.push('is-medium');
        } else if (this.modifiers.includes('is-large')) {
          controlModifiers.push('is-large');
        } else {
          controlModifiers.push('is-normal');
        }
      }

      return controlModifiers;
    },
  },
};
</script>

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

      <div class="control">
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
  props: ['field', 'value', 'errors'],
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
  },
};
</script>

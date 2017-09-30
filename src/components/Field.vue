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

      <div class="conrol">
        <component
          :is="controlType"
          v-bind="field"
          :value="value"
        ></component>
      </div>
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
  },
};
</script>

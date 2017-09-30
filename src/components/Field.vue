<template>
  <div class="VuelmaForm__field field">
    <label
      class="label"
      v-if="shouldDisplayLabel"
      v-text="field.label"
      :for="field.name"
    ></label>

    <div class="conrol">
      <component
        :is="controlType"
        v-bind="field"
        :value="value"
      ></component>
    </div>
  </div>
</template>

<script>
import InputControl from './Input';
import TextareaControl from './Textarea';
import SelectControl from './Select';
import CheckboxControl from './Checkbox';
import RadioControl from './Radio';
import FileControl from './File';

export default {
  name: 'vuelma-field',
  components: {
    InputControl,
    TextareaControl,
    SelectControl,
    CheckboxControl,
    RadioControl,
    FileControl,
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
  },
};
</script>

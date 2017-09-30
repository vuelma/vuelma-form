<template>
  <div class="VuelmaForm__field field">
    <component
      :is="control"
      v-bind="field"
      :value="value"
      :errors="errors"
    ></component>
  </div>
</template>

<script>
import InputControl from './Input';

export default {
  name: 'vuelma-field',
  components: {
    InputControl,
  },
  props: ['field', 'value', 'errors'],
  computed: {
    control() {
      switch (this.field.type) {
        default:
          return 'input-control';
      }
    },
  },
};
</script>

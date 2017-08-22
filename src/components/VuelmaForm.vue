<template>
  <form
    class="VuelmaForm"
    @submit.prevent="$emit('submit')"
  >
    <template v-for="field in fields">
      <form-control
        v-bind="field"
        v-model="formObject[field.name]"
        :key="field.name"
        :errors="formErrors[field.name]"
      ></form-control>
    </template>
  </form>
</template>

<script>
import FormControl from './FormControl';

export default {
  name: 'vuelma-form',
  components: {
    FormControl,
  },
  props: {
    /**
     * The fields that will be rendered by the component.
     */
    fields: {
      type: Array,
      required: true,
    },

    /**
     * The object containing the data associated to the form.
     */
    formObject: {
      type: Object,
      required: true,
    },

    /**
     * The object containing form (validation) errors.
     */
    formErrors: Object,
  },
};
</script>

<template>
  <form
    class="VuelmaForm"
    @submit.prevent="$emit('submit')"
  >
    <template v-for="field in fields">
      <form-control
        v-model="formObject[field.name]"
        :key="field.name"
        :errors="formErrors[field.name]"
        :input-type="field.type"
        :name="field.name"
        :classNames="field.classNames"
        :placeholder="field.placeholder"
        :disabled="field.disabled"
        :readonly="field.readonly"
        :icon="field.icon"
        :rows="field.rows"
        :options="field.options"
        :multiple="field.multiple"
        :size="field.size"
        :datatype="field.datatype"
        :label="field.label"
        :horizontal="field.horizontal"
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

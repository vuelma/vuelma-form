<template>
  <form
    class="VuelmaForm"
    @submit.prevent="$emit('submit')"
  >
    <template v-for="field in fields">
      <input-field
        v-model="formObject[field.name]"
        :key="field.name"
        :input-type="field.type"
        :classNames="field.classNames"
        :placeholder="field.placeholder"
        :disabled="field.disabled"
        :readonly="field.readonly"
      ></input-field>
    </template>
  </form>
</template>

<script>
import InputField from './VuelmaForm/Input';

export default {
  name: 'vuelma-form',
  components: {
    InputField,
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
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

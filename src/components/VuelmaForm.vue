<template>
  <form class="VuelmaForm" @submit.prevent="$emit('submit', formObject)">
    <field
      v-for="field in fields"
      :key="field.name"
      :field="field"
      :value="formObject[field.name]"
      :errors="formErrors[field.name]"
      :loading="field.loading"
    >
      <slot
        v-bind="field"
        :name="field.name"
      ></slot>
    </field>
  </form>
</template>

<script>
import Field from './Field';
import bus from '../utils/bus';

export default {
  name: 'vuelma-form',
  components: {
    Field,
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
    formErrors: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Disable the entire form.
     */
    disabled: Boolean,
  },
  mounted() {
    bus.$on('update:model', (field) => {
      this.$emit('update:formObject', {
        ...this.formObject,
        [field.name]: field.value,
      });
    });
  },
};
</script>

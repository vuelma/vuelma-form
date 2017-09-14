<template>
  <form class="VuelmaForm" @submit.prevent="$emit('submit', formObject)">
    <template v-for="field in fields">
      <span :key="field.name">
        <slot
          v-if="field.type === 'custom'"
          v-bind="field"
          :name="'message'"
        ></slot>

        <form-control
          v-else
          v-bind="field"
          v-model="formObject[field.name]"
          :errors="formErrors[field.name]"
          :disabled="disabled"
        ></form-control>
      </span>
    </template>
    <slot></slot>
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
    formErrors: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Disable the entire form.
     */
    disabled: Boolean,
  },
};
</script>

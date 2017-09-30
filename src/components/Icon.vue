<template>
  <span class="VuelmaForm__icon icon" :class="modifiers">
    <i class="fa" :class="`fa-${name}`"></i>
  </span>
</template>

<script>
export default {
  name: 'icon-component',
  props: {
    /**
     * The font-awesome icon to be used.
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * The custom class names to be appended.
     */
    modifiers: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<template>
  <input
    class="VuelmaForm__input input"
    v-bind="$props"
    :id="name"
    @input="input"
  >
</template>

<script>
import Control from './Control';

export default {
  name: 'input-control',
  extends: Control,
};
</script>

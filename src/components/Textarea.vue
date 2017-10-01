<template>
  <textarea
    class="VuelmaForm__textarea textarea"
    v-bind="$props"
    :id="name"
    @input="input"
  ></textarea>
</template>

<script>
import Control from './Control';

export default {
  name: 'textarea-control',
  extends: Control,
};
</script>

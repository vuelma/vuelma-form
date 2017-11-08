<template>
  <textarea
    class="VuelmaForm__textarea textarea"
    v-bind="$props"
    :id="name"
    @input="input"
    @blur.stop="onBlur"
    @focus.stop="onFocus"
  ></textarea>
</template>

<script>
import Control from './Control';

export default {
  name: 'textarea-control',
  extends: Control,
};
</script>

<template>
  <div class="hello">
    <vuelma-form
      :fields="[
        {
          type: 'text',
          name: 'text1',
          placeholder: 'Insert text here...',
        },
      ]"
      :form-object="formObject"
    ></vuelma-form>
  </div>
</template>

<script>
import VuelmaForm from './VuelmaForm';

export default {
  name: 'hello',
  components: {
    VuelmaForm,
  },
  data() {
    return {
      formObject: {
        text1: '',
      },
    };
  },
};
</script>

<style>
@import '~bulma/css/bulma.css';
</style>

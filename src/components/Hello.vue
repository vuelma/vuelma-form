<template>
  <div class="hello">
    <vuelma-form
      :fields="[
        {
          type: 'text',
          name: 'name',
          placeholder: 'Name',
          classNames: ['is-primary'],
        },
        {
          type: 'email',
          name: 'email',
          placeholder: 'E-mail Address',
          disabled: true,
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          readonly: true,
        },
        {
          type: 'tel',
          name: 'phone_number',
          placeholder: 'Phone Number',
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
        name: '',
        email: '',
        password: '',
        phone_number: '',
      },
    };
  },
};
</script>

<style>
@import '~bulma/css/bulma.css';
</style>

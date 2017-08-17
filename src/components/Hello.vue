<template>
  <div class="hello">
    <vuelma-form
      :fields="[
        {
          type: 'text',
          name: 'name',
          label: 'Full Name',
          placeholder: 'Name',
          classNames: ['is-primary', 'is-large'],
          icon: 'user',
        },
        {
          type: 'email',
          name: 'email',
          label: 'E-mail Address',
          placeholder: 'E-mail Address',
          disabled: true,
          classNames: 'is-medium',
          icon: {
            left: 'envelope',
            right: 'check',
          },
        },
        {
          type: 'password',
          name: 'password',
          label: 'Password',
          placeholder: 'Password',
          classNames: 'is-small',
          readonly: true,
        },
        {
          type: 'tel',
          name: 'phone_number',
          label: 'Phone Number',
          placeholder: 'Phone Number',
          classNames: ['is-info'],
        },
        {
          type: 'textarea',
          name: 'comments',
          label: 'Comments',
          placeholder: 'Insert comments here...',
          rows: 5,
        },
        {
          type: 'select',
          name: 'country',
          label: 'Country',
          options: [
            {
              value: 1,
              label: 'Philippines',
            },
            {
              value: 2,
              label: 'Japan',
            },
            {
              value: 3,
              label: 'China',
            },
          ],
          placeholder: 'Country',
          icon: 'globe',
          classNames: 'is-fullwidth',
          datatype: Number,
        },
      ]"
      :form-object="formObject"
      :form-errors="formErrors"
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
        name: null,
        email: null,
        password: null,
        phone_number: null,
        comments: null,
        country: null,
      },
      formErrors: {
        name: ['Invalid format!'],
      },
    };
  },
};
</script>

<style>
@import '~bulma/css/bulma.css';
@import '~font-awesome/css/font-awesome.css';
</style>

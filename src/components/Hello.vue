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
          horizontal: true,
        },
        {
          type: 'email',
          name: 'email',
          label: 'E-mail Address',
          placeholder: 'E-mail Address',
          icon: 'envelope',
          addons: {
            left: {
            type: 'select',
            name: 'currency',
            options: [
              {
                value: 1,
                label: 'PH',
              },
              {
                value: 2,
                label: 'JP',
              },
              {
                value: 3,
                label: 'CH',
              },
            ],
            datatype: Number,
          },
            right: {

            },
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
          datatype: Number,
        },
        {
          type: 'checkbox',
          name: 'remember',
          label: 'Remember Me',
        },
        {
          type: 'radio',
          name: 'gender',
          label: 'Gender',
          options: [
            {
              value: 'male',
              label: 'Male',
            },
            {
              value: 'female',
              label: 'Female',
            },
            {
              value: 'none',
              label: 'None',
              disabled: true,
            },
          ],
        },
        {
          type: 'file',
          name: 'avatar',
          label: 'Avatar',
          placeholder: 'Choose a file...',
          classNames: ['has-name', 'is-fullwidth'],
          icon: 'user',
        },
        {
          type: 'text',
          name: 'address',
          label: 'Address',
          placeholder: 'Where do you live?',
          icon: 'home',
          horizontal: true,
        },
        {
          type: 'number',
          name: 'weight',
          label: 'weight',
          placeholder: '0.00',
          icon: 'user',
          datatype: Number,
          min: 1,
          max: 5,
        },
        {
          type: 'custom',
          name: 'message',
          label: 'Message',
          placeholder: 'Insert message here...',
        },
      ]"
      :form-object="formObject"
      :form-errors="formErrors"
    >
      <template scope="field" slot="message">
        <div class="field">
          <label class="label" v-text="field.label"></label>
          <div class="control">
            <textarea
              class="textarea"
              v-bind="field"
              v-model="formObject.message"
            ></textarea>
          </div>
        </div>
      </template>
    </vuelma-form>
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
        email_suffix: '@icloud.com',
        password: null,
        phone_number: null,
        comments: null,
        country: null,
        remember: null,
        gender: null,
        avatar: null,
        address: null,
        currency: null,
        weight: null,
        message: null,
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

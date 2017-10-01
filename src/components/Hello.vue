<template>
  <div class="hello">
    <vuelma-form
      :fields="[
        {
          type: 'text',
          name: 'name',
          label: 'Full Name',
          placeholder: 'Name',
          modifiers: ['is-primary', 'is-large', 'is-loading'],
          iconLeft: 'user',
          iconRight: 'warning',
          horizontal: true,
          loading: true,
        },
        {
          type: 'email',
          name: 'email',
          label: 'E-mail Address',
          placeholder: 'E-mail Address',
          icon: 'envelope',
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          modifiers: 'is-small is-static',
          readonly: true,
        },
        {
          type: 'tel',
          name: 'phone_number',
          label: 'Phone Number',
          placeholder: 'Phone Number',
          modifiers: ['is-info'],
          disabled: true,
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
        },
        {
          type: 'select',
          name: 'places',
          options: [
            {
              value: 1,
              label: 'School',
            },
            {
              value: 2,
              label: 'Office',
            },
            {
              value: 3,
              label: 'Hospital',
            },
            {
              value: 4,
              label: 'Park',
            },
          ],
          multiple: true,
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
          label: '',
          placeholder: 'Choose a file',
          modifiers: ['has-name', 'is-centered', 'is-boxed', 'is-large'],
          icon: false,
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
          isNumber: true,
          min: 0.000001,
          max: 999999999999.999999,
          step: 0.000001,
        },
        {
          type: 'custom',
          name: 'message',
          label: 'Message',
          placeholder: 'Insert message here...',
        },
      ]"
      :form-object.sync="formObject"
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
        places: [],
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

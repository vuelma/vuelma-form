<template>
  <div class="VuelmaForm__file file">
    <label class="file-label">
      <input
        class="file-input"
        :type="type"
        :id="name"
        :name="name"
        @change="input"
      >
      <span class="file-cta">
        <span class="file-icon">
          <i class="fa" :class="`fa-${icon}`"></i>
        </span>
        <span class="file-label" v-text="placeholder"></span>
      </span>
      <span class="file-name" v-show="filename" v-text="filename"></span>
    </label>
  </div>
</template>

<script>
import Control from './Control';
import bus from '../utils/bus';

export default {
  name: 'file-control',
  extends: Control,
  props: {
    /**
     * The placeholder label for the upload button.
     */
    placeholder: String,

    /**
     * The font-awesome icon to be used for upload button.
     */
    icon: {
      type: String,
      default: 'upload',
    },
  },
  computed: {
    filename() {
      if (!this.value) {
        return null;
      }

      return this.value[0].name;
    },
  },
  methods: {
    /**
     * Handle the change input value event.
     */
    input(event) {
      bus.$emit('update:model', {
        name: event.target.name,
        value: [...event.target.files],
      });
    },
  },
};
</script>

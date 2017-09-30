<script>
import bus from '../utils/bus';

export default {
  name: 'control',
  props: {
    /**
     * The bound data from the form component.
     */
    value: {
      type: [String, Number, Array, Boolean, File, FileList],
      reqiured: true,
    },

    /**
     * The input/field type of the component.
     */
    type: {
      type: String,
      default: 'text',
    },

    /**
     * The unique name of the field.
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * The custom classes that will be used for the control.
     */
    modifiers: {
      type: [Array, String],
      default: () => ([]),
    },
  },
  methods: {
    /**
     * Handle the change input value event.
     */
    input(event) {
      const { name, value } = event.target;
      bus.$emit('update:model', { name, value });
    },
  },
};
</script>

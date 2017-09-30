<script>
import bus from '../utils/bus';

export default {
  name: 'control',
  props: {
    /**
     * The bound data from the form component.
     */
    value: {
      type: [String, Number, Array, Boolean, File],
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
  },
  methods: {
    input(event) {
      bus.$emit('update:model', {
        name: event.target.name,
        value: event.target.value,
      });
    },
  },
};
</script>

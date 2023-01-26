<template>
  <section :class="`flex flex-col ${marginBottom}`">
    <label 
      class="font-semibold text-gray-500 mb-2"
    >
      {{ `${$t(label)} ${required ? '*' : ''}`}}
    </label>
    <input 
      class="input"
      :class="`${disabled ? 'disabled' : ''}`"
      :type="type"
      :disabled="disabled"
      v-model="compValue"
    />
  </section>
</template>

<script>
export default {
  name: 'BaseInput',

  props: {
    type: { type: String, default: 'text', },
    value: { type: String, default: '', },
    label: { type: String, default: '', },
    required: { type: Boolean, default: false, },
    disabled: { type: Boolean, default: false, },
    marginBottom: { type: String, default: 'mb-5', }
  },

  computed: {
    compValue: {
      get() { return this.value; },
      set(newVal) { this.$emit('input', newVal); },
    },
  },
}
</script>
<template>
  <section class="flex items-center">
    <input 
      :class="`${disabled ? 'disabled' : ''}`" 
      type="checkbox" :v-model="value" 
      :checked="value" 
      :disabled="disabled"
      @change="handleChange"
    >
    <label class="text-gray-500 ml-2">{{ $t(label) }}</label>
    <label class="ml-2 text-sm">
      <slot name="label"/>
    </label>
  </section>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  
  props: {
    value: { type: Boolean, default: false, },
    label: { type: String, default: '', },
    disabled: { type: Boolean, default: false, }
  },

  methods: {
    handleChange(e) {
      this.$emit('input', e.target.checked);
    }
  }
}
</script>
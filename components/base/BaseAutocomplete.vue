<template>
  <section class="flex flex-col mb-5">
    <label class="font-semibold text-gray-500 mb-2">{{ `${$t(label)} ${required ? '*' : ''}` }}</label>
    <t-rich-select
      :options="items"
      v-model="selectedValue"
      value-attribute="value"
      text-attribute="label"
      class="flex flex-col relative"
      :disabled="disabled"
      variant="baseAutocomplete"
    >
      <!-- noResults slot -->
      <template slot="noResults" slot-scope="{ className }">
        <div :class="className">{{ $t('NoResultados')}}</div>
      </template>

      <!-- Option -->
      <template slot="option" slot-scope="{ className, option }">
        <div class="shadow-sm lg:text-lg" :class="className">
          <div class="flex flex-col w-full ml-2 text-gray-800">
            <strong>{{ option.raw.label }}</strong>
          </div>
        </div>
      </template>
    </t-rich-select>
  </section>
</template>

<script>
export default {
  name: 'BaseAutocomplete',

  props: {
    value: { type: String, default: null },
    items: { type: Array, default: () => [] },
    label: { type: String, default: '' },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },

  computed: {
    selectedValue: {
      get() { return this.value; },
      set(newVal) { this.$emit('input', newVal); }
    }
  },
}
</script>

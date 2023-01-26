<template>
  <div>
    <select :name="item.name" :id="item.name" @change.stop.prevent="handleChange" v-model="item.selected" class="w-full" :class="extraClasses">
      <option v-for="option in item.options" :key="option.label" :value="option.value" :selected="option.value === item.selected">
        {{ $t(option.label) }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',

  props: {
    item: { type: Object, default: () => {} },
    extraClasses: { type: String, default: '' }
  },

  methods: {
    handleChange(e) {
      this.$emit('change', e);
    },
  }
}
</script>
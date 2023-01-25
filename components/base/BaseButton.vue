<template>
  <button
    :class="`btn-svg ${width} ${color} ${bgColor} ${small ? 'btn-small' : '' }`"
    @click="$emit('click')"
  > 
    <icon v-if="icon" class="w-6 h-6" :icon="icon"/>
    <span v-if="label" :class="`ml-2 ${color} font-bold ${labelHidden} md:block`">
      {{ $t(label).toUpperCase() }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'text-white'
    },
    width: {
      type: String,
      default: ''
    },
    labelHidden: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button',
    },
    bgColor: {
      type: String,
      default: 'bg-amber-500'
    },
    small: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {

    }
  }
}
</script>
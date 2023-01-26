<template>
  <div :class="`${textColor} ${bgColor} px-5 py-4 mb-5 shadow-sm`">
    <p v-if="!isMessageArray">{{ alert.message }}</p>
    <p 
      v-else
      v-for="(msg, index) in alert.message" 
      :key="index"
    >
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseAlert',

  props: {
    /** Objeto con la información a mostrar en la alerta */
    alert: { type: Object, default: () => {} },
  },

  computed: {
    bgColor() {
      if (this.alert.type === 'success') return 'bg-green-200';
      return 'bg-red-200'
    },

    /** Color del texto
     * @returns {String} text-color
     */
    textColor() {
      if (this.alert.type === 'success') return 'text-green-600';
      return 'text-red-700'
    },
    isMessageArray() {
      if (typeof this.alert.message === 'object') return true;
      return false;
    }
  },
}
</script>

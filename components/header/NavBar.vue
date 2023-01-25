<template>
  <nav class="
    flex
    flex-row
    justify-center
    absolute 
    h-16 
    w-full 
    bg-teal-700 
    left-0 
    bottom-0 
    md:top-0 
    md:right-0 
    md:left-auto 
    md:bottom-auto 
    md:w-auto
    z-50">
    <NavBarAction 
      v-for="action in navBarActions"
      :key="action.text"
      :navBarAction="action"
      @open-action-modal='openActionModal'
    />
    <BaseDialog v-if="showBaseDialog" @close="closeBaseDialog"/>
  </nav>
</template>

<script>
import NavBarAction from '@/components/header/NavBarAction.vue';

export default {
  components: { NavBarAction },

  data() {
    return {
      showBaseDialog: false,
      navBarActions: [
        {
          icon: 'https://teetimesbooking.dasenred.com/maqueta/img/ico-login.svg',
          text: 'LOGIN',
          bgColor: '',
          bgColorHover: 'hover:bg-teal-800',
        },
        {
          icon: 'https://teetimesbooking.dasenred.com/maqueta/img/ico-user-add.svg',
          text: 'SIGN UP',
          bgColor: '',
          bgColorHover: 'hover:bg-teal-800',
        },
        // {
        //   icon: 'https://teetimesbooking.dasenred.com/maqueta/img/ico-user-add.svg',
        //   text: 'LANGUAGE',
        //   bgColor: '',
        //   bgColorHover: 'hover:bg-teal-800',
        // },
        {
          icon: 'https://teetimesbooking.dasenred.com/maqueta/img/ico-shopping-cart.svg',
          text: 'CART',
          bgColor: 'bg-amber-500',
          bgColorHover: 'hover:bg-amber-600',
          hasActionIcon: true,
          textActionIcon: '3',
        },
      ]
    }
  },

  methods: {
    openActionModal() {
      this.showBaseDialog = true;
    },

    closeBaseDialog() {
      this.showBaseDialog = false;
    }
  }
}
</script>
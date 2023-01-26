<template>
  <nav class="
    flex
    flex-row
    justify-center
    fixed 
    h-16 
    w-full 
    bg-teal-700 
    left-0 
    bottom-0
    md:absolute 
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
    />
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import NavBarAction from '@/components/header/NavBarAction.vue';

export default {
  name: 'NavBar',

  components: { NavBarAction },

  data() {
    return {
      navBarActions: [
        {
          id: 'login',
          icon: 'https://teetimesbooking.dasenred.com/maqueta/img/ico-login.svg',
          text: this.$t('login').toUpperCase(),
          path: `/login`,
          activePath: `/login`,
          bgColor: '',
          bgColorLinkActive: 'bg-teal-800',
          bgColorHover: 'hover:bg-teal-800',
          showWhenUserLoggedIn: false,
        },
        {
          id: 'sign-up',
          icon: 'https://teetimesbooking.dasenred.com/maqueta/img/ico-user-add.svg',
          text: this.$t('signUp').toUpperCase(),
          path: `/sign-up`,
          activePath: `/sign-up`,
          bgColor: '',
          bgColorLinkActive: 'bg-teal-800',
          bgColorHover: 'hover:bg-teal-800',
          fct: 'navToSignUpPage',
          showWhenUserLoggedIn: false,
        },
        {
          id: 'private-area',
          icon: 'https://teetimesbooking.dasenred.com/maqueta/img/ico-user-add.svg',
          text: this.$t('areaPrivada').toUpperCase(),
          path: '/private-area/my-profile',
          activePath: '/private-area',
          bgColor: '',
          bgColorLinkActive: 'bg-teal-800',
          bgColorHover: 'hover:bg-teal-800',
          showWhenUserLoggedIn: true,
        },
        {
          id: 'log-out',
          icon: 'https://teetimesbooking.dasenred.com/maqueta/img/ico-user-add.svg',
          text: this.$t('terminarSesion').toUpperCase(),
          path: '/',
          activePath: '/',
          bgColor: '',
          bgColorHover: 'hover:bg-teal-800',
          showWhenUserLoggedIn: true,
        },
        {
          id: 'cart',
          icon: 'https://teetimesbooking.dasenred.com/maqueta/img/ico-shopping-cart.svg',
          text: this.$t('cart').toUpperCase(),
          path: '/cart',
          activePath: '/cart',
          bgColor: '',
          bgColorLinkActive: '',
          bgColorHover: 'hover:bg-teal-800',
          hasActionIcon: false,
          textActionIcon: '0',
          alwaysShow: true
        },
      ],
    }
  },

  watch: {
    cartItems() {
      if (this.cartItems < 1) {
        this.navBarActions.find(action => action.id === 'cart').bgColor = '';
        this.navBarActions.find(action => action.id === 'cart').bgColorLinkActive = 'bg-teal-800';
        this.navBarActions.find(action => action.id === 'cart').bgColorHover = 'hover:bg-teal-800';
        this.navBarActions.find(action => action.id === 'cart').hasActionIcon = false;
        this.navBarActions.find(action => action.id === 'cart').textActionIcon = this.cartItemsText;
      } else {
        this.navBarActions.find(action => action.id === 'cart').bgColor = 'bg-amber-500';
        this.navBarActions.find(action => action.id === 'cart').bgColorLinkActive = 'bg-amber-600';
        this.navBarActions.find(action => action.id === 'cart').bgColorHover = 'hover:bg-amber-600';
        this.navBarActions.find(action => action.id === 'cart').hasActionIcon = true;
        this.navBarActions.find(action => action.id === 'cart').textActionIcon = this.cartItemsText;
      }
    },
  },

  computed: {
    ...mapState({
      cartItems: state => state.cart.cartItems,
      cartItemsText: state => String(state.cart.cartItems),
    }),
  },

  mounted() {
    if (this.cartItems > 0) {
      this.navBarActions.find(action => action.id === 'cart').bgColor = 'bg-amber-500';
      this.navBarActions.find(action => action.id === 'cart').bgColorHover = 'hover:bg-amber-600';
      this.navBarActions.find(action => action.id === 'cart').hasActionIcon = true;
      this.navBarActions.find(action => action.id === 'cart').textActionIcon = this.cartItemsText;
    }
  }
}
</script>

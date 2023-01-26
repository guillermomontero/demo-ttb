<template>
  <nuxt-link 
    v-if="showLink" 
    :to="localePath(navBarAction.path)"
    :class="`flex flex-1 items-center justify-center p-2 text-white md:flex-auto md:px-5 lg:px-2.5 ${navBarAction.bgColor} ${isLinkActive ? navBarAction.bgColorLinkActive : ''} ${navBarAction.bgColorHover} hover:bg-teal-800`"
    exact
    @click.native="handleClick"
  >
    <span class="relative" >
      <img :src="navBarAction.icon" :alt="navBarAction.text" class="w-6 h-6">
      <BaseActionIcon :freeText="navBarAction.textActionIcon" v-if="navBarAction.hasActionIcon"/>
    </span>
    <span class="ml-3 md:hidden lg:block flex items-center">{{ navBarAction.text }}</span>
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NavBarAction',
  
  props: {
    /** Información de la acción del navbar */
    navBarAction: { type: Object, default: () => {} }
  },

  data() {
    return {
      showBaseDialog: false,
    };
  },

  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth._isUserLoggedIn,
      currentURL: state => state.currentURL,
    }),

    showLink() {
      if (this.isUserLoggedIn) {
        if (this.navBarAction.showWhenUserLoggedIn || this.navBarAction.alwaysShow) return true;
        else return false;
      } 
      
      if (!this.isUserLoggedIn) {
        if (!this.navBarAction.showWhenUserLoggedIn || this.navBarAction.alwaysShow) return true;
        return false
      }
    },

    isLinkActive() {
      if (this.currentURL.includes(this.navBarAction.activePath)) return true;
      return false;
    }
  },

  methods: {
    handleClick() {
      if (this.navBarAction.id === 'log-out') {
        document.cookie = `isUserLoggedIn=${false};path=/`;
        this.$store.commit('auth/setIsUserLoggedIn', false);
      }
    }
  } 
}
</script>

<template>
  <section>
    <div class="sm:hidden mb-8">
      <base-select 
        extraClasses="bg-slate-100 border border-gray-300 text-gray-700 text-sm font-bold block w-full p-2.5" 
        :item="navBar" 
        @change="handleNavBarSelectedOption"
      />
    </div>
    
    <ul class="hidden text-sm font-bold text-center divide-x divide-gray-200 shadow sm:flex mb-8">
      <li class="w-full" v-for="link in navBarLinks" :key="link.label">
        <NuxtLink 
          :to="link.path" 
          class="nav-link inline-block p-4 w-full text-gray-700 bg-white focus:outline-none" 
          :class="{'hover:bg-teal-100': link.path !== $route.path, 'text-white bg-teal-700': link.path === $route.path}"
        >
          {{ $t(link.label).toUpperCase() }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'PrivateAreaNavBar',
  
  data() {
    return {
      navBar: {
        name: 'navBar',
        selected: 1,
        options: [
          { label: 'myProfile', value: 1, path: '/private-area/my-profile' },
          { label: 'bookings', value: 2, path: '/private-area/bookings' },
          { label: 'cards', value: 3, path: '/private-area/cards' },
        ]
      },
      navBarLinks: [
        { label: 'myProfile', path: `/${this.$i18n.locale}/private-area/my-profile` },
        { label: 'bookings', path: `/${this.$i18n.locale}/private-area/bookings` },
        { label: 'cards', path: `/${this.$i18n.locale}/private-area/cards` },
      ]
    }
  },

  created() {
    if (this.$route.path === `/${this.$i18n.locale}/private-area/my-profile`) return  this.navBar.selected = 1;
    if (this.$route.path === `/${this.$i18n.locale}/private-area/bookings`) return  this.navBar.selected = 2;
    if (this.$route.path === `/${this.$i18n.locale}/private-area/cards`) return  this.navBar.selected = 3;
  },

  methods: {
    handleNavBarSelectedOption(e) {
      const selectedOption = this.navBar.options.find(option => option.value === Number(e.target.value));
      this.$router.push({ path: `/${this.$i18n.locale}${selectedOption.path}`});
    }
  }
}
</script>

<style>
/* exact link will show the primary color for only the exact matching link */
.nav-link.nuxt-link-exact-active {
  background-color: rgb(15 118 110); /* teal-700 */
  color: rgb(255 255 255); /* text-white */
}

</style>
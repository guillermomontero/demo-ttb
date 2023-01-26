<template>
  <section class="flex-auto md:bg-slate-200">
    
    <div class="container mx-auto py-5 px-4 md:py-10">

      <h2 class="text-xl font-extrabold text-center mb-5 md:mb-8">{{ $t('registeredUserAccess') }}</h2>

      <LoginForm activeKeydownEnter/>

      <p class="text-center font-semibold text-sm mb-5 md:m-0">
        {{ $t('dontHaveAUserAccount') }}
        <BaseLink 
          color="text-amber-500"
          colorHover="hover:text-black" 
          :link="linkRegistrarse" 
          hasUnderlineWhenHover
        />
      </p>
    </div>
  </section>
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue';

export default {
  name: 'LoginPage',
  
  components: { LoginForm },
  
  data() {
    return {
      linkRegistrarse: {
        label: 'register',
        path: '/sign-up'
      },
    }
  },
}
</script>
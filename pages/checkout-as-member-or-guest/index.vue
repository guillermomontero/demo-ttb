<template>
  <section class="flex-auto md:bg-slate-200">
    <div class="mx-auto">

    <div class="container mx-auto py-5 px-4 md:py-10">
      <h2 class="text-xl font-extrabold text-center mb-5 md:mb-8">{{ $t('checkOutAsAMember')}}</h2>
      <LoginForm />
    </div>
    <div class="container mx-auto py-5 px-4 md:py-10">
      <h2 class="text-xl font-extrabold text-center mb-5 md:mb-8">{{ $t('checkOutAsAGuest')}}</h2>
      <GuestForm />
    </div>
    </div>
  </section>
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue';
import GuestForm from '@/components/login/GuestForm.vue';

export default {
  components: { LoginForm, GuestForm }
}
</script>
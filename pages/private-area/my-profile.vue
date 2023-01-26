<template>
  <section class="flex-auto md:bg-slate-200">
    <div class="container mx-auto py-5 px-4 md:py-10">
      <PrivateAreaNavBar />
      <PersonalInformation/>
      <EditPassword/>
      <RemoveMembership/>
    </div>
  </section>
</template>

<script>
import PrivateAreaNavBar from '@/components/private-area/coumn/PrivateAreaNavBar.vue';
import PersonalInformation from '@/components/private-area/my-profile/PersonalInformation.vue';
import EditPassword from '@/components/private-area/my-profile/EditPassword.vue';
import RemoveMembership from '@/components/private-area/my-profile/RemoveMembership.vue';

export default {
  components: {
    PrivateAreaNavBar,
    PersonalInformation,
    EditPassword,
    RemoveMembership
  }
}
</script>
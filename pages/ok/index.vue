<template>
  <section class="flex-auto md:bg-slate-200">
    <div class="container mx-auto py-5 px-4 md:py-10">
      <span>{{ $t('suLocalizador') }} {{ 'MYKBR268' }}</span>
      <BaseButton
        :label="$t('voucher').toUpperCase()"
        @click="openDetallePage"
      />
      <BaseButton
        :label="$t('reservaVolverPrincipal').toUpperCase()"
        @click="navToHomePage"
      />
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openDetallePage() {
      window.open(`/${this.$i18n.locale}/detalle?localizador=MYKBR268`);
    },
    navToHomePage() {
      this.$router.push({ path: `/${this.$i18n.locale}/` });
    }
  }
}
</script>
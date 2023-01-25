<template>
  <div class="fixed top-0 right-0 left-0 w-screen h-screen flex justify-center items-center bg-black/20 z-50" @keyup="pressKey">
    <div class="bg-white min-w-[40%] min-h-min opacity-100 rounded-2xl px-4 py-4">
      <header class="flex justify-between pb-4">
        <div class="text-lg font-semibold">
          Titulo
        </div>
        <icon icon="fas fa-times" class="cursor-pointer" @click="closeDialog"/>
      </header>
      <div class="pb-10">
        Contenido
      </div>
      <footer class="flex justify-evenly">
        <BaseButton label="cancelar" small bgColor="bg-black/5 hover:bg-black/10" color="text-black/50" @click="closeDialog"/>
        <BaseButton label="aceptar" small bgColor="bg-black/5 hover:bg-black/10" color="text-black/50" @click="handleAcceptar"/>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pressKey(e) {
      console.log(e);
      if (e.key === 'Escape') this.closeDialog();
    },

    handleAcceptar() {
      this.closeDialog();
    },

    closeDialog() {
      this.$emit('close');
    }
  }
}
</script>
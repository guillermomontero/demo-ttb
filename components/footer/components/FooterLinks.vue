<template>
  <nav :class="`list-none ${classExtra}`">
    <li
      class="mb-2"
      v-for="link in links"
      :key="link.label"
    >
      <!-- Nav between pages of app -->
      <BaseLink
        v-if="!link.isNavToOtherWeb && !link.isCookie"
        :link="link"
        color="text-gray-300"
        colorHover="hover:text-white"
      />

      <!-- Nav to external links -->
      <a 
        v-if="link.isNavToOtherWeb"
        :href="link.path"
        target="_blank"
        class="text-gray-300 hover:text-white"
      >
        {{ link.label }}
      </a>

      <!-- Open Cookiebot -->
      <a 
        v-if="link.isCookie" 
        href="javascript: void(0)" 
        onclick="javascript: Cookiebot.renew()"  
        class="text-gray-300 hover:text-white">
        {{ link.label }}
      </a>
    </li>
  </nav>
</template>

<script>
export default {
  name: 'FooterLinks',

  props: {
    /** Links a mostrar */
    links: { type: Array, default: () => {} },
    /** Clase o clases adicionales para el footer */
    classExtra: { type: String, default: '' }
  }
}
</script>

<template>
  <div 
    class="flex flex-col w-full max-w-sm mx-auto h-80 bg-white shadow-sm">
    <div 
      class="
      flex 
      flex-col 
      justify-end 
      h-1/2
      bg-center bg-cover bg-no-repeat"
      :style="{ 'backgroundImage': `url(${zona.img})`}"
    >
      <h3 class="p-2 bg-black bg-opacity-50 text-white text-center text-2xl md:text-3xl font-extrabold">{{ zona.nombre }}</h3>
    </div>
    <div
      class="h-1/2 flex flex-col items-center"
    >
      <p class="text-xl my-3 border-b border-gray-300">{{ `${zona.nCourses} courses`}}</p>
      <p class="mb-4 text-gray-400">{{ `From ${zona.precioDesde}`}}</p>
      <NuxtLink :to="`/city/${zona.nombre}`">
        <BaseButton
          label="BOOK NOW"
          width="w-40"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    zona: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
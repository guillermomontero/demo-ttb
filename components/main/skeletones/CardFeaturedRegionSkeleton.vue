<template>
  <section>
    <div class="flex flex-col w-full max-w-sm mx-auto h-80 bg-white shadow-sm border-gray-400 border">
      <div 
        class="
        flex 
        flex-col 
        justify-end 
        h-1/2
        bg-center bg-cover bg-no-repeat"
      >
        <SkeletonBlock h="h-full"/>
      </div>
      <div
        class="h-1/2 flex flex-col items-center"
      >
        <p class="my-3 w-5/12"><SkeletonBlock/></p>
        <p class="mb-4 w-4/12"><SkeletonBlock h="h-4"/></p>
        <p class="mb-4 w-8/12"><SkeletonBlock h="h-10"/></p>
      </div>
    </div>
  </section>
</template>
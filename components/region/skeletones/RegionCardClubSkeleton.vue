<template>
  <article class="grid grid-cols-[60%_40%] border border-gray-300 relative">
    <div class="absolute -top-3 left-3 z-9 p-1 rounded w-5/12">
      <SkeletonBlock/>
    </div>
    <div class="w-full">
      <SkeletonBlock  h="h-20"/>
    </div>
    <div class="w-full bg-gray-200 flex flex-col items-center justify-center px-5 py-2">
      <p class="mb-2 w-3/12"><SkeletonBlock h="h-3"/></p>
      <p class="mb-4 w-7/12"><SkeletonBlock/></p>
      <p class="mb-2 w-3/12"><SkeletonBlock h="h-3"/></p>
      <p class="mb-8 w-7/12"><SkeletonBlock/></p>
      <p class="w-11/12"><SkeletonBlock h="h-8"/></p>
    </div>
  </article>
</template>

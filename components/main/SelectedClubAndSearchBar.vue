<template>
  <div
    class="hidden relative md:flex items-center justify-center w-full bg-teal-700 min-h-[96px] md:min-h-[240px] lg:min-h-[300px] xl:min-h-[400px] md:bg-inherit md:bg-center md:bg-cover md:bg-no-repeat"
    :style="{ 'backgroundImage': compBackgroundImg }"> 
    <div class="flex">
      <BaseSearchBar />
    </div>

    <SelectedClubLabel :club="club"/>
  </div>
</template>

<script>
import SelectedClubLabel from  '@/components/main/SelectedClubLabel.vue';

export default {
  name: 'SelectedClubAndSearchBar',
  
  components: { SelectedClubLabel },

  props: {
    club: { type: Object, default: () => {} },
    compBackgroundImg: { type: String, default: '' }
  }
}
</script>
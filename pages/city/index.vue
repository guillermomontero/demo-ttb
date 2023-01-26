<template>
  <div>
    <base-dropdown
      label="Search..."
      v-model="countries.selected"
      :items="countries.options"
      :selectedItem.sync="countries.selected"
    />
  </div>
</template>

<script>
export default {
    data() {
      return {
        countries: {
          selected: null,
          options: [
            { label: 'United Kingdom', value: 1 },
            { label: 'France', value: 2 },
            { label: 'Germany', value: 3 },
            { label: 'Ireland', value: 4 },
            { label: 'Norway', value: 5 },
            { label: 'Spain', value: 6 },
            { label: 'Switzerland', value: 7 },
            { label: 'Andorra', value: 8 },
            { label: 'Bulgaria', value: 9 },
            { label: 'Italy', value: 10 },
            { label: 'Denmark', value: 11 },
            { label: 'Findland', value: 12 },
            { label: 'Slovakia', value: 13 },
            { label: 'Malta', value: 14 },
          ]
        },
      }
    }
};
</script>


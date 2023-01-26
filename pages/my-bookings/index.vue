<template>
  <section class="flex-auto md:bg-slate-200">
    <div class="container mx-auto py-5 px-4 md:py-10">
      <base-table
        :table='table'
        :sortingField="sortingField"
        @headerClick="handleHeaderClick"
      />
    </div>
  </section>
</template>

<script>
import sortingDirection from '@/config/constants/sortingDirection.js';

export default {
  data() {
    return {
      name: '',
      table: {
        headers: [
          {
            id: 'name-id',
            value: 'name',
            text: 'The name',
            type: 'string',
            sortingDirection: null,
            isFirstItem: true,
          },
          {
            id: 'sale-id',
            value: 'sales',
            text: 'Sales',
            type: 'number',
            sortingDirection: null,
          },
          {
            id: 'date-id',
            value: 'date',
            text: 'Date',
            type: 'date',
            sortingDirection: null,
          },
        ],  
        items: [],
        actions: [
          { label: 'search', url: require('~/static/img/ico-search.svg'), fct: () => this.clickAction1() },
          { label: 'search', url: require('~/static/img/ico-search.svg'), fct: () => this.clickAction2() },
        ]
      },
      originTablaItems: [],
      sortingField: null,
      sortingDirection: null,
    }
  },

  mounted() {
    this.getTableItems();
  },

  methods: {
    getTableItems() {
      const items = [
        {
          name: '1 Alfonso Bribiesca',
          sales: 9999,
          date: '10/11/2012',
        },
        {
          name: '2 Saida Redondo',
          sales: 1500,
          date: '05/10/2012',
        },
        {
          name: '3 Regina Bribiesca',
          sales: -200.50,
          date: '09/07/2017',
        },
        {
          name: '4 Ricardo Martinez',
          sales: 0.0,
          date: '12/12/2008',
        },
        {
          name: '5 Alfonso Bribiesca',
          sales: 9999,
          date: '10/11/2012',
        },
        {
          name: '6 Saida Redondo',
          sales: 1500,
          date: '05/10/2012',
        },
        {
          name: '7 Regina Bribiesca',
          sales: -200.50,
          date: '09/07/2017',
        },
        {
          name: '8 Ricardo Martinez',
          sales: 0.0,
          date: '12/12/2008',
        },
        {
          name: '9 Alfonso Bribiesca',
          sales: 9999,
          date: '10/11/2012',
        },
        {
          name: '10 Saida Redondo',
          sales: 1500,
          date: '05/10/2012',
        },
        {
          name: '11 Regina Bribiesca',
          sales: -200.50,
          date: '09/07/2017',
        },
        {
          name: '12 Ricardo Martinez',
          sales: 0.0,
          date: '12/12/2008',
        },
      ];
      this.originTablaItems = structuredClone(items);
      this.table.items = structuredClone(items);
    },

    clickAction1() { },

    clickAction2() {
      this.$router.push({ path: `/${this.$i18n.locale}` });
    },

    handleHeaderClick(item) {
      if (!this.sortingField) {
        this.sortingField = item.value;
        this.sortingDirection = sortingDirection.ASCEND;
      } else if (this.sortingField && this.sortingField === item.value && this.sortingDirection === sortingDirection.ASCEND) {
        this.sortingDirection = sortingDirection.DESCEND;
        item.sortingDirection = sortingDirection.DESCEND;
      } else if (this.sortingField && this.sortingField === item.value && this.sortingDirection === sortingDirection.DESCEND) {
        this.sortingDirection = null;
        item.sortingDirection = null;
      } else if (this.sortingField && this.sortingField === item.value && !this.sortingDirection) {
        this.sortingDirection = sortingDirection.ASCEND;
        item.sortingDirection = sortingDirection.ASCEND;
      } else if (this.sortingField && this.sortingField !== item.value) {
        this.resetSortingDirection();
        this.sortingField = item.value;
        this.sortingDirection = sortingDirection.ASCEND;
      }

      if (this.sortingDirection === sortingDirection.ASCEND) this.getIncreaseSorting(item);
      else if (this.sortingDirection === sortingDirection.DESCEND) this.getDecreaseSorting(item);
      else this.table.items = structuredClone(this.originTablaItems);
    },

    resetSortingDirection() {
      this.table.headers = this.table.headers.filter(item => item.value).map(header => {
        if (header.value) return { ...header, sortingDirection: null }
        return { ...header };
      });
    },

    getIncreaseSorting(item) {
      this.table.items.sort((a ,b) => {
        // Date
        if (item.type === 'date') return new Date(a[item.value]) - new Date(b[item.value]);
        // Number
        if (item.type === 'number') return a[item.value] - b[item.value];
        // String 
        return a[item.value].localeCompare(b[item.value])
      });
    },

    getDecreaseSorting(item) {
      this.table.items.sort((a ,b) => {
        // Date
        if (item.type === 'date') return new Date(b[item.value]) - new Date(a[item.value]);
        // Number
        if (item.type === 'number') return b[item.value] - a[item.value];
        // String 
        return b[item.value].localeCompare(a[item.value])
      });
    }
  }
}
</script>

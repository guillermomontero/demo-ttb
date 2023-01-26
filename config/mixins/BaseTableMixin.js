import sortingDirection from '@/config/constants/sortingDirection.js';

export default {
  data() {
    return {
      originTablaItems: [],
      sortingField: null,
      sortingDirection: null,
    };
  },

  methods: {
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
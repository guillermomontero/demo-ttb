<template>
  <t-table
    :headers="compHeaders"
    :data="compTableItems"
    :responsive="true"
    :responsive-breakpoint="520"
  >
    <!-- Thead slot -->
    <template v-slot:thead="props">
      <thead :class="props.theadClass">
        <tr :class="props.trClass" class="bg-gray-300">
          <th
            v-for="(item, index) in props.data"
            :key="index"
            :class="[props.thClass]"
            @click="handleHeaderClick(item)"
          > 
            <div class="flex group">
              <span class="mr-2">{{ $t(item.text) }}</span>
              <img v-if="item.sortingDirection === sortingDirection.ASCEND && sortingField === item.value" class="w-4 h-4 self-center" src="~/static/img/ico-search.svg" alt="search"/>
              <img v-if="item.sortingDirection === sortingDirection.DESCEND && sortingField === item.value" class="w-4 h-4 self-center" src="~/static/img/ico-user-add.svg" alt="user"/>
              <img v-if="item.sortingDirection !== sortingDirection.ASCEND && item.sortingDirection !== sortingDirection.DESCEND && !item.sortingDirection" class="w-4 h-4 self-center group-hover:opacity-100 opacity-0" src="~/static/img/ico-search.svg" alt="user"/>
            </div>
          </th>
        </tr>
      </thead>
    </template>

    <!-- Row slot -->
    <template slot="row" slot-scope="props">
      <template v-if="viewportWidth < 520">
        <tr 
          :class="[props.trClass, props.rowIndex % 2 === 0 ? '' : 'bg-gray-100']"
          v-for="header in table.headers"
          :key="getHeaderKey(header.value)"
          v-show="header.text"
        >
          <th 
            class="text-left"
            :class="{'cursor-pointer': isTableRowClickable }"
            @click="handleClickRow(props.row)"
          >
            {{ header.text }}
          </th>
          <td 
            :class="[props.tdClass, 'td-overflow', 'relative']"
          >
            <template v-if="header.isFirstItem">
              <img
                v-show="isActionIsIcon"
                v-for="(action, index) in table.actions"
                :key="index"
                class="bg-green-500 absolute top-2 w-6 h-6"
                :style="getPositionAbsoluteRight(index, table.actions.length)"
                :src="action.url"
                :alt="action.label"
                @click="action.fct"
              />
              <BaseButton
                v-show='isActionIsBtn'
                v-for="(action, index) in table.actions"
                :key="index"
                :style="getPositionAbsoluteRight(index, table.actions.length)"
                :label="$t('delete').toUpperCase()"
                small
                @click="action.fct(props.row)"
              />
            </template>
            <span 
              :class="{'cursor-pointer': isTableRowClickable }"
              @click="handleClickRow(props.row)"
            >
              {{ props.row[header.value] }}
            </span>
          </td>
        </tr>
      </template>

      <template v-else>
        <tr 
          :class="[props.trClass, props.rowIndex % 2 === 0 ? '' : 'bg-gray-100']"
        >
          <td 
            :class="[props.tdClass, isTableRowClickable ? 'cursor-pointer': '']"
            v-show="header.value"
            v-for="header in table.headers"
            :key="header.value"
            @click="handleClickRow(props.row)"
          >
            {{ props.row[header.value] }}
          </td>
          <td
            :class="[props.tdClass, 'text-right']"
            v-for="(action, index) in table.actions"
            :key="index"

          >
            <img 
              v-if="isActionIsIcon"
              class="bg-green-500 w-6 h-6" 
              :src="action.url"
              :alt="action.label"
              @click="action.fct"
            />
            <BaseButton
              v-if="isActionIsBtn"
              :label="$t('delete').toUpperCase()"
              small
              @click="action.fct(props.row)"
            />
          </td>
        </tr>
      </template>
      
    </template>

    <!-- TBody slot -->
    <template v-if="!table.items.length" v-slot:tbody="props">
      <tbody :class="props.tbodyClass">
        <tr :class="[props.trClass, 'text-center']">
          <td :class="props.tdClass" colspan="3">
            {{ $t('noDataFound')}}
          </td>
        </tr>
      </tbody>
    </template>

    <!-- TFooter slot -->
    <template slot="tfoot" slot-scope="{ tfootClass, trClass, tdClass, renderResponsive }">
      <tfoot :class="tfootClass">
        <tr :class="trClass">
          <td
            :class="tdClass"
            :colspan="renderResponsive ? 2 : 4"
          > 
            <t-pagination
              :hide-prev-next-controls="renderResponsive"
              :total-items="table.items.length"
              :per-page="getPerPageXItems(renderResponsive)"
              :class="{'ml-auto': !renderResponsive, 'mx-auto': renderResponsive}"
              @change="handleChangePagination"
            />
          </td>
        </tr>
      </tfoot>
    </template>
  </t-table>
</template>

<script>
import { mapState } from 'vuex';
import sortingDirection from '@/config/constants/sortingDirection.js';

export default {
  name: 'BaseTable',

  props: {
    table: { type: Object, default: () => {}, },
    sortingField: { type: String, default: '', },
    isActionIsBtn: { type: Boolean, default: true },
    isActionIsIcon: { type: Boolean, default: false },
    isTableRowClickable: { type: Boolean, default: false },
  },

  data() {
    return {
      sortingDirection,
      currentPage: 1,
    }
  },

  computed: {
    ...mapState({
      viewportWidth: state => state.viewportWidth,
    }),

    compHeaders() {
      this.table.headers = this.table.headers.filter(header => header.value);
      if (this.table.actions && this.table.actions.length) this.table.actions.forEach(() => this.table.headers.push({}));
      return this.table.headers;
    },
    
    compTableItems() {
      let perPageTableItems = [];

      let index;
      if (this.currentPage === 1) index = 0;
      else index = (this.currentPage - 1) * this.getPerPageXItems(this.viewportWidth < 520);
      
      for (let i = 0; i < this.getPerPageXItems(this.viewportWidth < 520); i++) {
        if (this.table.items[index + i]) perPageTableItems.push(this.table.items[index + i])
      }
      return perPageTableItems;
    }
  },

  methods: {
    handleClickRow(e) {
      if (this.isTableRowClickable) this.$emit('clickRow', e);
    },

    getHeaderKey(value) {
      return `${value}${crypto.randomUUID()}`;
    },

    getPositionAbsoluteRight(index = 0, actionQuantity) {
      const right = actionQuantity * 2.5;
      return `right: ${right - index * 2.5 - 2.5}rem`;
    },

    handleHeaderClick(item) {
      this.$emit('headerClick', item);
    },

    handleChangePagination(currentPage) {
      this.currentPage = currentPage;
    },

    getPerPageXItems(renderResponsive) {
      return renderResponsive ? 5 : 10;
    }
  }
}
</script>

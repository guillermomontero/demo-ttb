import Vue from 'vue';
import VueTailwind from 'vue-tailwind';

import { datepicker } from '~/plugins/vue-tailwind/components/t-datepicker';
import { dropdown } from '~/plugins/vue-tailwind/components/t-dropdown';
import { richSelect } from '~/plugins/vue-tailwind/components/t-rich-select';
import { table } from '~/plugins/vue-tailwind/components/t-table';
import { pagination } from '~/plugins/vue-tailwind/components/t-pagination';

const components = {
  't-datepicker': datepicker,
  't-dropdown': dropdown,
  't-rich-select': richSelect,
  't-table': table,
  't-pagination': pagination,
}

Vue.use(VueTailwind, components)

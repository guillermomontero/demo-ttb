import Vue from 'vue';

// Base
import BaseButton from '~/components/base/BaseButton.vue';
import BaseLink from '~/components/base/BaseLink.vue';
import BaseIconLink from '~/components/base/BaseIconLink.vue';
import BaseActionIcon from '~/components/base/BaseActionIcon.vue';
import BaseDialog from '~/components/base/BaseDialog.vue';
import BaseSelect from '~/components/base/BaseSelect.vue';
import BaseDropdown from '~/components/base/BaseDropdown.vue';
import BaseSearchBar from '~/components/base/BaseSearchBar.vue';
import BaseAlert from '~/components/base/BaseAlert.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseTable from '@/components/base/BaseTable.vue';
import BaseCheckbox from '@/components/base/BaseCheckbox.vue';
import BaseAutocomplete from '@/components/base/BaseAutocomplete.vue';
import BaseSpinner from '~/components/base/BaseSpinner.vue';

import SkeletonBlock from '@/components/skeleton/skeletonBlock.vue'

const components = { 
  BaseButton,
  BaseLink,
  BaseIconLink,
  BaseActionIcon,
  BaseDialog,
  BaseSelect,
  BaseDropdown,
  BaseSearchBar,
  BaseAlert,
  BaseInput,
  BaseTable,
  BaseCheckbox,
  BaseAutocomplete,
  BaseSpinner,
  SkeletonBlock,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
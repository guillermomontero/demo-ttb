import Vue from 'vue';

// Base
import BaseButton from '~/components/base/BaseButton.vue';
import BaseSearchBar from '~/components/base/BaseSearchBar.vue';
import BaseCard from '~/components/base/BaseCard.vue';
import BaseLink from '~/components/base/BaseLink.vue';
import BaseIconLink from '~/components/base/BaseIconLink.vue';
import BaseActionIcon from '~/components/base/BaseActionIcon.vue';
import BaseDialog from '~/components/base/BaseDialog.vue';

const components = { 
  BaseButton,
  BaseSearchBar,
  BaseCard,
  BaseLink,
  BaseIconLink,
  BaseActionIcon,
  BaseDialog
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
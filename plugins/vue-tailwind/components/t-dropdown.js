import TDropdown from 'vue-tailwind/dist/t-dropdown';

export const dropdown = {
  component: TDropdown,
  props: {
    fixedClasses: {
      button: 'flex items-center text-white block px-4 py-2 transition duration-100 ease-in-out border border-transparent shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      wrapper: 'flex-col',
      dropdownWrapper: 'relative z-10',
      dropdown: 'absolute shadow bg-white',
      enterClass: 'opacity-0 scale-95',
      enterActiveClass: 'transition transform ease-out duration-100',
      enterToClass: 'opacity-100 scale-100',
      leaveClass: 'opacity-100 scale-100',
      leaveActiveClass: 'transition transform ease-in duration-75',
      leaveToClass: 'opacity-0 scale-95'
    },
    classes: {
      button: 'bg-blue-500 hover:bg-blue-600',
      dropdown: 'bg-white'
    },
    variants: {
      danger: {
        button: 'bg-red-500 hover:bg-red-600',
        dropdown: 'bg-red-50'
      },
      dropdownPositionRight: {
        dropdown: 'origin-top-right right-[0.6rem]'
      },
      dropdownPositionLeft: {
        dropdown: 'origin-top-left left-2'
      }
    }
  }
}

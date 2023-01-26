<template>
  <section class="flex items-center w-full pt-2 bg-slate-200 border-b border-b-gray-400">
    
    <!--Selector fecha-->
    <ul class="flex flex-wrap items-center -mb-px ml-1 md:ml-4">
      <li class="flex flex-col items-center pr-1 cursor-pointer" @click="goToPrevDayToWeek">
        <svg class="w-5 fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M7 12.5 17.293 2l.707.707L8.414 12.5 18 22.293l-.707.707L7 12.5z"/></svg>
      </li>
      <li v-for="(day, index) in week" :key="index">
        <a @click="changeDay(day)" class="flex flex-col items-center w-10 md:w-12 cursor-pointer"
          :class="{
            'py-1 bg-white text-teal-700 border-b-white border border-gray-400': day.day === activeDay,
            'my-1 text-gray-700 hover:text-teal-700 border border-slate-200 border-r-gray-300': day.day !== activeDay,
          }">
          <span class="text-xxs">{{ monthsLocale[day.month] }}</span>
          <span class="text-xl leading-6 md:text-2xl md:leading-7 font-bold">{{ day.day }}</span>
          <span class="text-xxs">{{ daysOfWeekLocale[day.dayOfWeek] }}</span>
        </a>
      </li>
      <li class="flex flex-col items-center px-1 cursor-pointer" @click="goToNextDayToWeek">
        <svg class="w-5 fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M18 12.5 7.707 23 7 22.293l9.586-9.793L7 2.707 7.707 2 18 12.5z"/></svg>
      </li>
      <li class="ml-1 md:ml-3 relative" id="calendar">
        <!--Control calendario-->
        <a @click="setShowCalendarIcon">
          <img src="~/static/img/ico-calendar.svg" class="w-6 h-6 cursor-pointer">
        </a>
        <div class="absolute w-96">
          <t-datepicker
            :show="showCalendar"
            :yearsPerView="8"
            lang="es"
            class="max-w-xs calendar-date"
            placeholder="Select date"
            inputName="calendar"
            name="calendarclick"
            dateFormat="Y-m-d"
            userFormat="j F, Y"
            :clearable="false"
            @update:show="setShowCalendar"
            @input="changeDate"
          />
        </div>
      </li>
    </ul>
    
  </section>
</template>

<script>
import { createDate } from '@/utils/date';
import { mapState } from 'vuex';
import { daysOfWeekLocale, monthsLocale, getDaysOfWeek, getPreviusDay, getNextDay } from '@/utils/calendar';

export default {
  name: 'FilterBar',

  props: {
    /** Fecha inicial por defecto */
    initDate: { type: String, default: '2022-01-01' },
  },

  data() {
    return {
      week: [],
      daysOfWeekLocale: [],
      monthsLocale: [],
      activeDay: 1,
      selectedDate: createDate(),
      showCalendar: false,
    };
  },

  watch: {
    /** Cada vez que cambie la fecha */
    initDate(val) {
      if (this.week.find(day => val === day.date)) {
        this.selectedDate = val;
        this.activeDay = this.week.find(day => val === day.date).day;
      } else {
        this.recalculate();
      }
    },

    /** Al cambiar de fecha seleccionada */
    selectedDate() {      
      this.$emit('update:initDate', this.selectedDate);
      this.$emit('change-date', this.selectedDate);
    },
  },

  computed: {
    ...mapState({
      culture: state => state.culture.culture,
    }),
  },

  mounted() {
    /** Al crear el componente activamos el evento click
     * Esto permite que al mostrar el calendario y hacer click en un elemento diferente al componente, éste se cierre
     */
    window.addEventListener('click', (e) => {
      if (document.getElementById('calendar') && !document.getElementById('calendar').contains(e.target)) {
        if (this.showCalendar) this.showCalendar = false;
      }
    });

    this.recalculate();
  },

  methods: {
    recalculate() {
      this.daysOfWeekLocale = daysOfWeekLocale(this.culture);
      this.monthsLocale = monthsLocale(this.culture);
      this.week = getDaysOfWeek(this.initDate);
      this.selectedDate = this.initDate;
      this.activeDay = this.week[0].day;
    },

    /** Cambiar de día
     * @param {Object} day Información del día
     */
    changeDay(day = {}) {
      if (day.date === this.selectedDate) return;

      this.activeDay = day.day;
      this.selectedDate = day.date;
    },

    /** Mostrar o no el calendario al hacer click sobre el icono */
    setShowCalendarIcon() {
      this.showCalendar = !this.showCalendar;
    },

    /** Mostrar o no el calendario
     * @param {Boolean} value
     */
    setShowCalendar(value) {
      this.showCalendar = value;
    },

    /** Cambio de fecha desde el calendario
     * @param {String} value Fecha seleccionada
     */
    changeDate(value) {
      this.week = getDaysOfWeek(value);
      this.selectedDate = createDate(new Date(value));
      this.activeDay = this.week[0].day;
    },

    /** Ir a un día anterior */
    goToPrevDayToWeek() {
      const previusDay = getPreviusDay(this.week[0].date);
      this.week = getDaysOfWeek(previusDay);
    },

    /** Ir a un día siguiente */
    goToNextDayToWeek() {
      const nextDay = getNextDay(this.week[0].date);
      this.week = getDaysOfWeek(nextDay);
    },
  }
};
</script>

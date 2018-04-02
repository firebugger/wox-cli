<template>
  <div class="wox-order-canlendar">
    <div class="month">
      <swiper ref="mySwiper" :options="swiperOption" @slideChange="handleChange">
        <swiper-slide
          v-for="(item, index) in calendarData.months || []"
          :key="index"
        >
          {{ item.split('-')[0] }}年{{ item.split('-')[1] }}月
        </swiper-slide>
        <div class="prev" slot="button-prev"></div>
        <div class="next" slot="button-next"></div>
      </swiper>
    </div>
    <ul class="weeks">
      <li>日</li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
    </ul>
    <ul class="days">
      <li 
        v-for="(item, index) in new Array(new Date(`${nowMonth.replace('-','/')}/1`).getDay())" 
        :key="'d' + index" 
        class="disable"
      ></li>
      <li 
        v-for="(item, index) in new Array(new Date(nowMonth.split('-')[0], nowMonth.split('-')[1] , 0).getDate())" 
        :key="index" 
        :class="{
          cur: selectDate === `${nowMonth}-${fromatNum(index + 1)}`, 
          disable: !matchDateInfo( index + 1 ) || matchDateInfo( index + 1 ).sellOut === true
        }"
        @click="handleClick( index + 1 )"
      >
        <h3>{{ index + 1 }}</h3>
        <div v-if="matchDateInfo( index + 1 )">
          <p class="price">
            ￥{{matchDateInfo( index + 1 ).item.startPrice}}
          </p>
          <p v-if="matchDateInfo( index + 1 ).stock" class="invent">
            余{{matchDateInfo( index + 1 ).stock.quota}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  name: 'Calendar',
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      },
    }
  },
  computed: {
    nowMonth() {
      const defaultMonth = `${new Date().getFullYear()}-${this.fromatNum(new Date().getMonth() + 1)}`;
      const { monthData = {} } = this.calendarData;
      const { month =  defaultMonth } = monthData;
      return month;
    }
  },
  props: {
    checkCallback: {
      type: Function
    }, 
    calendarData: {
      type: Object,
      default: {}
    },
    monthChange: {
      type: Function
    },
    selectDate: {
      type: String
    }
  },
  components: {
    swiper, swiperSlide
  },
  methods: {
    handleChange() {
      const index = this.$refs.mySwiper.swiper.activeIndex;
      const { months } = this.calendarData;
      this.monthChange( months[index] );
    },
    fromatNum( num ) {
      return num > 9 ? num : '0' + num;
    },
    handleClick( index ) {
      const dateData = this.matchDateInfo(index);
      this.checkCallback && this.checkCallback(dateData);
    },
    matchDateInfo( i ) {
      const { fromatNum } = this;
      const { monthData = {} } = this.calendarData;
      const { dates, items, productTemplate, month } = monthData;
      const date = `${month}-${fromatNum(i)}`;
      const isMatch = dates ? dates.find(v=>{ return v.date === date }) : null;
      return isMatch ? { 
        ...isMatch, 
        item: items[isMatch.itemId], 
        month,
        productTemplate
      } : null
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
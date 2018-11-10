<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <a :href="item.url">
          <img class="banner-img" :src="item.photo" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  name: 'Banner',
  props: ['banner'],
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        loop : true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>

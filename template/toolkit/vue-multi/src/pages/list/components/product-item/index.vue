<template>
  <a :href="product.link" class="product-item">
    <div class="picture-wrapper">
      <img v-lazy="product.cover" />
      <span class="top-tips" v-if="product.top > 0">TOP {{product.top}}</span>
      <span class="top-tips" v-else-if="product.discount">{{product.discount}}</span>
      <div class="right-tag">
        <span class="day">{{product.tourlen}}天</span>
        <span class="city">{{product.startcity}}出发</span>
      </div>
      <span class="code">编号{{product.code}}</span>
    </div>
    <div class="content-wrapper">
      <p class="title" v-html="product.title"></p>
      <div class="bottom-info">
        <div class="price">
          <span v-if="product.discount" class="discount-prefix">折后价</span><span>{{product.currency || 'US$'}}{{product.price || 0}}</span> 起/人
        </div>
        <div class="tag-list">
          <span :class="tag.type" v-if="product.tags && index < 2" v-for="(tag, index) in product.tags" :key="index">{{tag.name}}</span>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);

export default {
  name: 'ProductItem',
  props: ['product']
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>

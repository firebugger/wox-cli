<template>
  <div class="product-list">
    <div class="result-count">
      <span></span>
      <p>为您找到{{list.total}}个产品</p>
    </div>
    <div>
      <product-item v-if="list.products" v-for="(product, index) in list.products" :key="index" :product="product"></product-item>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import ProductItem from '../product-item';
 
export default {
  name: 'ProductList',
  components: { ProductItem },
  props: ['list', 'getList'],
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>

<template>
  <div>
    <Header />
    <product-list
      :list="list"
      :getList="getList"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import Header from '@/components/header';
import ProductList from './components/product-list';

export default {
  name: 'App',
  components: {
    Header, ProductList
  },
  computed: {
    ...mapState({
      list: state => state.list,
    })
  },
  methods: {
    ...mapMutations({
      changeState: 'CHANGE_STATE'
    }),
    ...mapActions({
      getList: 'getList',
    }),
  },
  created() {
    this.getList({
      url: '//app.lulutrip.com/new/tour/destination_data/region-USEast',
    });
  },
}
</script>

<style lang="less" scoped>
  @import './App.less';
</style>

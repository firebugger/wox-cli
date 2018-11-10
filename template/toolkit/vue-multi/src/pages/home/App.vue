<template>
  <div id="home">
    <Header />
    <Banner :banner="banner"/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import Header from '@/components/header';
import Banner from './components/banner';

export default {
  name: 'App',
  components: { Header, Banner },
  computed: {
    ...mapState({
      banner: state => state.banner
    }),
  },
  methods: {
    ...mapActions([
      'fetchData',
    ]),
  },
  mounted () {
    this.fetchData();
  }
}
</script>


<style lang="less" scoped>
  @import './App.less';
</style>

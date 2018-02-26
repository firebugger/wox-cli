<template>
  <div>
    <Header />
    <div class="list">
      <h1>{{ msg }}</h1>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <router-link :to="{ path: 'detail', query: { id: item.login }}">
            <span>
              {{ index + 1 }} :
            </span>
            <span class="name">
              {{ item.login }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex';
import Header from '@/components/header';

export default {
  name: 'ListPage',
  data () {
    return {
      msg: 'List Page',
    }
  },
  created(){
    this.getList();
  },
  components: { 'Header': Header },
  computed: {
    ...mapState('list', {
      count: state => state.count,
      list: state => state.list
    })
  },
  methods: {
    ...mapMutations('list', {
      add: 'ADD_COUNT',
      remove: 'REMOVE_COUNT'
    }),
    ...mapActions('list', {
      getList: 'getUserList'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.list {
  padding: 10px 15px;
  text-align: center;

  li {
    text-align: left;
    padding-left: 10px;
    height: 24px;
    line-height: 24px;

    a {
      text-decoration: none;
    }

    .name {
      text-decoration: underline;
    }
  }
}
</style>

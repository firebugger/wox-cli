<template>
  <div>
    <Header />
    <div class="list">
      <h1>{{ msg }}</h1>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <a href="javascript:void(0)">
            <span>
              {{ index + 1 }} :
            </span>
            <span class="name">
              {{ item.login }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex';
import Header from '@/components/header';

export default {
  name: 'App',
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
    ...mapState({
      count: state => state.count,
      list: state => state.list
    })
  },
  methods: {
    ...mapMutations({
      add: 'ADD_COUNT',
      remove: 'REMOVE_COUNT'
    }),
    ...mapActions({
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

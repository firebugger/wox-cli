<template>
  <div>
    <Header />
    <div class="home">
      <h1>{{ msg }}</h1>
      <ul>
        <li>
          <router-link to="/list">
            跳转用户列表
          </router-link>
        </li>
        <li v-on:click="go">手动跳转用户列表</li>
      </ul>
      <img src="@/images/logo.png" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/header';

export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Home Page'
    }
  },
  components: { 'Header': Header },
  methods: {
    go() {
      if(confirm('是否跳转到列表页？')) {
        this.$router.push('list');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.home {
  padding: 10px 15px;
  text-align: center;

  li {
    height: 24px;
    line-height: 24px;
    background: url('@/images/logo.png') no-repeat left center;
    background-size: 10px auto;
  }
}
</style>

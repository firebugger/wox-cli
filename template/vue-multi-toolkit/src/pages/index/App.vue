<template>
  <div>
    <Header />
    <div class="home">
      <h1>{{ msg }}</h1>
      <ul>
        <li>
          <a href="/list.html">
            跳转用户列表
          </a>
        </li>
      </ul>
      <img src="@/images/logo.png" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/header';

export default {
  name: 'App',
  data () {
    return {
      msg: 'Home Page'
    }
  },
  components: { 'Header': Header },
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

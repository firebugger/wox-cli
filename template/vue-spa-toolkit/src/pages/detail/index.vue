<template>
  <div>
    <Header />
    <div class="detail">
      <h1>{{ msg }}</h1>
      <ul>
        <li>
          <router-link to="/">
            返回首页
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            返回列表页
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header';

export default {
  name: 'DetailPage',
  data () {
    return {
      msg: 'Detail Page'
    }
  },
  components: { 'Header': Header },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.detail {
  padding: 10px 15px;
  text-align: center;

  li {
    height: 24px;
    line-height: 24px;
  }
}
</style>

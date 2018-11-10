<template>
  <div class="header">
    <div class="search">
      <span class="logo" @click="callback(true)"></span>
      <a href="//app.lulutrip.com/search" class="search-img"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['callback']
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>

<template>
  <div id="app">
    <transition name="slide-left">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

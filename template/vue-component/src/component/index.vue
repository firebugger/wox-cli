<template>
  <div class="test-component">
    <div class="box">
      <span class="prev" @click="reduce">减少</span>
      <span>{{ count }}</span>
      <span class="next" @click="add">增加</span>
    </div>
    <p>{{ msg }}</p>
    <p><span @click="callback(count)">向父组件传值</span></p>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    msg() {
      return `加加减减最终为 ${this.count} ；`;
    }
  },
  props: {
    callback: {
      type: Function
    }
  },
  methods: {
    add() {
      this.count = this.count + 1;
    },
    reduce() {
      this.count = this.count - 1;
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
import TestComponent from './src/component/index.vue';

const install = function (Vue, globalOptions) {
  if (globalOptions) {
    TestComponent.props.globalOptions.default = () => globalOptions
  }
  Vue.component(TestComponent.name, TestComponent);
}
const vueCom = { TestComponent, install }

export default vueCom;
export { TestComponent, install };
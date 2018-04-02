import WoxVueCalendar from './src/index.vue';

const install = function (Vue, globalOptions) {
  if (globalOptions) {
    WoxVueCalendar.props.globalOptions.default = () => globalOptions
  }
  Vue.component(WoxVueCalendar.name, WoxVueCalendar);
}
const vueCom = { WoxVueCalendar, install }

export default vueCom;
export { WoxVueCalendar, install };

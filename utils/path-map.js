/**
 * 初始化类型与模板目录映射
 */
module.exports = {
  /* component */
  'react-component': 'component/react',
  'vue-component': 'component/vue',

  /* toolkit */
  'react-admin-toolkit': 'toolkit/react-admin',
  'react-general-toolkit': 'toolkit/react-general',
  'react-spa-toolkit': 'toolkit/react-spa',
  'vue-spa-toolkit': 'toolkit/vue-spa',
  'vue-multi-toolkit': 'toolkit/vue-multi',

  /* page */
  'react-admin-page': 'page/react-admin',
};

/**
 * cmds:
 * wox init -c react        --> component/react
 * wox init -t react-admin  --> toolkit/react-admin
 * wox init -p react-admin  --> page/react-admin
 */

import indexPage from './pages/index';

const en_US = {
  appName: 'Destination',
  // 表单类
  form: {
    email: {
      label: 'Email',
      error: 'Please entry the right email',
      empty: 'Please entry your email'
    },
    password: {
      label: 'Password',
      error: 'Please entry the right password(number、letter or _)',
      empty: 'Please entry your password'
    }
  },
  // 操作类
  operation: {
    delete: {
      name: 'Delete',
      tips: 'Are you sure to delete this record?'
    },
    edit: 'Edit',
    audit: 'Audit',
    copy: 'Copy'
  },
  // 请求类
  fetch: {
    success: {
      name: '',
      tips: ''
    }
  },
  // 通用头部
  header: {
    locales: {
      'zh_CN': '中文（简体）',
      'en_US': 'English',
    }
  },
  // 页面类
  pages: {
    index: indexPage,
  },
  // 分页插件
  showTotal: 'Total {total} items'
};

export default en_US;
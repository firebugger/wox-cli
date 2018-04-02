import indexPage from './pages/index';

const zh_CN = {
  appName: '目的地',
  // 表单类
  form: {
    email: {
      label: '邮箱',
      error: '请输入正确的邮箱格式',
      empty: '请输入邮箱'
    },
    password: {
      label: '密码',
      error: '请输入正确的密码格式(数字、字母或_组成)',
      empty: '请输入密码'
    }
  },
  // 操作类
  operation: {
    delete: {
      name: '删除',
      tips: '确认要删除该条记录吗？'
    },
    edit: '编辑',
    audit: '审核',
    copy: '复制'
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
    },
  },
  // 页面类
  pages: {
    index: indexPage,
  },
  // 分页插件
  showTotal: '共 {total} 条记录'
};

export default zh_CN;
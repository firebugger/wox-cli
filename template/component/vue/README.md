#### 安装

```javascript {.line-numbers}

  // yarn 
  $ yarn add wox-vue-calendar

  // npm 
  $ npm i wox-vue-calendar

```

### 使用

```javascript {.line-numbers}

  <template>
    <WoxVueCalendar 
      :check-callback="callback"       // 选中日期回调
      :calendar-data="calendarData"    // 日历数据 需包含 { monthData: 月份数据, months: 月份列表 }
      :month-change="monthChange"      // 月份切换回调
      :select-date="2018-03-26"        // 默认选中日期
    />
  </template>

  <script>
  import { WoxVueCalendar } from 'wox-vue-calendar';

  export default {
    name: 'Test',
    components: { 
      WoxVueCalendar
    },
    methods: {
      callback( data ) {
        console.log(data);
      },
      monthChange( nowmonth ) {
        console.log(nowmonth);
      }
    }
  }
  </script>

  <style scoped lang="less">
    @import './index.less';
  </style>

```

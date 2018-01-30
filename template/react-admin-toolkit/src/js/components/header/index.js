import React, { Component } from 'react';
import { Table } from 'antd';
import classNames from 'classnames/bind';
import styles from './style.mod.less';
import Cookie from 'js-cookie';
// 多语言
import intl from 'react-intl-universal';
import zh_CN from 'app/locales/zh_CN';
import en_US from 'app/locales/en_US';

const currentLocale =  Cookie.get('locale-language') || 'en_US';
intl.init({ currentLocale, locales: { zh_CN, en_US } });

const cx = classNames.bind(styles);

class Header extends Component {
  handleClick = (type) => {
    Cookie.set('locale-language', type, { expires: 360, path: '/' });
    location.reload();
  }
  render() {
    return(
      <div className={cx('header')}>
        <span className={cx(currentLocale === 'zh_CN' ? 'cur' : '')}
          onClick={()=>this.handleClick('zh_CN')}
        >
          {intl.get('header.locales.zh_CN')}
        </span>
        <span className={cx(currentLocale === 'en_US' ? 'cur' : '')}
          onClick={()=>this.handleClick('en_US')}
        >
          {intl.get('header.locales.en_US')}
        </span>
      </div>
    )
  }
}
export default Header;

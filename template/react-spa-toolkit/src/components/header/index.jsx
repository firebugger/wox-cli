import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.mod.less';

const cx = classNames.bind(styles);

const Header = (props) => {
  return (
    <div className={cx('header')}>
      <img src="//static.quimg.com/global/img/logo-woxing.png" />
    </div>
  );
}

export default Header;

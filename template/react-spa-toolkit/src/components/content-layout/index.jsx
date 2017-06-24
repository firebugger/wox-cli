import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.mod.less';

const cx = classNames.bind(styles);

const ContentLayout = (props) => {
  return (
    <div className={cx('content-wrapper')}>
      {props.children}
    </div>
  );
}

export default ContentLayout;

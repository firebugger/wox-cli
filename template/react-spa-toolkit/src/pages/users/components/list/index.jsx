import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import classNames from 'classnames/bind';
import styles from './style.mod.less';

const cx = classNames.bind(styles);

const List = (props) => {
  return (
    <div className={cx('user-list')}>
      <Table
        columns={[
          {
            title: 'id',
            dataIndex: 'id'
          },
          {
            title: 'name',
            dataIndex: 'login'
          },
          {
            title: 'github',
            dataIndex: 'url'
          }
        ]}
        dataSource={props.userList}
        rowKey="id"
      />
    </div>
  );
}

export default List;

import React, { Component } from 'react';
import { Table } from 'antd';
import classNames from 'classnames/bind';
import styles from './style.mod.less';
import intl from 'react-intl-universal';

const cx = classNames.bind(styles);

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.columns = [{
      title: intl.get('pages.index.id'),
      dataIndex: 'id',
      key: 'id',
    }, {
      title: intl.get('pages.index.login'),
      dataIndex: 'login',
      key: 'login',
    }];
  }

  render() {
    return(
      <div className={cx('user-list', 'index-list')}>
        <Table dataSource={this.props.dataSource} columns={this.columns} rowKey="id" />
      </div>
    )
  }
}
export default UsersList;

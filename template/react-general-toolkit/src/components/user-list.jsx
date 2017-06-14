import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'antd/lib/table';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.columns = [{
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'name',
      dataIndex: 'login',
      key: 'login',
    }];
  }

  render() {
    return (
      <div>
        <Table dataSource={this.props.dataSource} columns={this.columns} rowKey="id" />
      </div>
    );
  }
}

UserList.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object),
};

UserList.defaultProps = {
  dataSource: [],
};

export default UserList;

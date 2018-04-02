import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import classNames from 'classnames/bind';
import styles from './style.mod.less';
import { fetchUsers } from '../../actions/users';
import Header from '../../components/header';
import ContentLayout from '../../components/content-layout';
import List from './components/list';

const cx = classNames.bind(styles);
const BreadcrumbItem = Breadcrumb.Item;

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { userList } = this.props;

    return (
      <div className={cx('users-page')}>
        <Header />
        <ContentLayout>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">首页</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>用户列表页</BreadcrumbItem>
          </Breadcrumb>
          <List userList={userList} />
        </ContentLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.users.userList
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './style.mod.less';
import Header from '../../components/header';
import ContentLayout from '../../components/content-layout';
import { Breadcrumb } from 'antd';

const cx = classNames.bind(styles);
const BreadcrumbItem = Breadcrumb.Item;

class Home extends Component {
  render() {
    return (
      <div className={cx('home-page')}>
        <Header />
        <ContentLayout>
          <Breadcrumb>
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/users">用户列表页</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="content">
            <div style={{fontSize: '20px', fontWeight: 'bold', textAlign: 'center', paddingTop: '50px'}}>Welcome home!</div>
          </div>
        </ContentLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

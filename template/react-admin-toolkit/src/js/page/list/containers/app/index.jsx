import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { actions } from '../../actions';
import styles from './style.mod.less';
import UserList from '../../components/user-list'
import WoxBreadcrumb from 'wox-admin-breadcrumb';

const cx = classNames.bind(styles);

class App extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    return(
      <div className={cx('app')}>
        <WoxBreadcrumb items={[
          { title: '用户列表', href: '/list.html' },
        ]} />
        <UserList dataSource={this.props.list} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		list: state.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchList: () => {
			dispatch(actions.featchList());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

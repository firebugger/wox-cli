import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from '../actions';
import UserList from '../components/user-list';

class App extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    return (
      <UserList dataSource={this.props.list} />
    );
  }
}

App.propTypes = {
  fetchList: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  fetchList: () => {},
  list: [],
};

const mapStateToProps = state => ({
  list: state.list,
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => {
    dispatch(actions.featchList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button/index';
import classNames from 'classnames/bind';
import styles from './style.mod.less';

const cx = classNames.bind(styles);

/**
 * 组件名遵循 `Wox` 前缀的规范
 */
class WoxComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.status,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({
      status: this.state.status === 'off' ? 'on' : 'off',
    });
  }

  render() {
    return (<div className={cx('wrapper')}>
      <Button
        type="primary"
        onClick={this.onToggle}
      >
        {this.state.status}
      </Button>
    </div>);
  }
}

WoxComponent.propTypes = {
  status: PropTypes.string,
};

WoxComponent.defaultProps = {
  status: 'off',
};

export default WoxComponent;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';      // 依赖的 `antd` 组件必须按照这种方式引入，不需要手动引用样式文件，`babel-plugin-import` 插件会自动引入
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
      <span className={cx('inner')}>click btn: </span>
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

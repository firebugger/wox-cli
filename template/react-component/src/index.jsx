import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button/index';

class BasicComponent extends Component {
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
    return (<div className="wrapper">
      <Button
        type="primary"
        onClick={this.onToggle}
      >
        {this.state.status}
      </Button>
    </div>);
  }
}

BasicComponent.propTypes = {
  status: PropTypes.string,
};

BasicComponent.defaultProps = {
  status: 'off',
};

export default BasicComponent;

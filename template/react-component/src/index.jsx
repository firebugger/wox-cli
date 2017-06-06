import React, { Component, PropTypes } from 'react';

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
      <span
        role="button"
        tabIndex={0}
        className="button"
        onClick={this.onToggle}
      >
        {this.state.status}
      </span>
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

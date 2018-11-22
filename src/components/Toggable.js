import React from 'react';
import PropTypes from 'prop-types';
import '../StyleZ.css';

class Togglable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' };
    const showWhenVisible = { display: this.state.visible ? '' : 'none' };

    return (
      <div>
        <div style={hideWhenVisible}>
          <button className="toggleButton" onClick={this.toggleVisibility}>
            {this.props.buttonLabel}
          </button>
        </div>
        <div style={showWhenVisible} className="toggableContent">
          {this.props.children}
          <button className="toggleButton" onClick={this.toggleVisibility}>
            cancel
          </button>
        </div>
      </div>
    );
  }
}

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
};

export default Togglable;

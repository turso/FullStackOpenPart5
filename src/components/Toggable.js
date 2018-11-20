import React from 'react';
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
        <div style={showWhenVisible}>
          {this.props.children}
          <button className="toggleButton" onClick={this.toggleVisibility}>
            cancel
          </button>
        </div>
      </div>
    );
  }
}

export default Togglable;

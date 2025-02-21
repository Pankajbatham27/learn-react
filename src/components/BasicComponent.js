import React, { Component } from 'react';

class BasicComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, React!',
    };
  }

  changeMessage = () => {
    this.setState({ message: 'You clicked the button!' });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Click Me</button>
      </div>
    );
  }
}

export default BasicComponent;
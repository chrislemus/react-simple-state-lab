import React from 'react';

export default class Cell extends React.Component {
  constructor(props) {
    super();
    const initialColor = props.value;
    this.state = {
      color: initialColor,
    };
  }

  changeColor = () => {
    this.setState({ color: '#333' });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        className="cell"
        onClick={this.changeColor}
      />
    );
  }
}

import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  genRow = (vals) => {
    return vals.map((val, idx) => <Cell key={'cell' + idx} value={val} />); // replace me and render a cell component instead!
  };

  genMatrix = () => {
    return this.props.values.map((rowVals, idx) => (
      <div className="row" key={'row' + idx}>
        {this.genRow(rowVals)}
      </div>
    ));
  };

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}

Matrix.defaultProps = {
  values: [[], [], [], [], [], [], [], [], [], []],
};

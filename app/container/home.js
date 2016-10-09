import React, { Component } from 'react';
import Bar from '../components/bar.js';
import Lists from '../components/lists.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Bar />
        <Lists />
      </div>
    );
  }
}

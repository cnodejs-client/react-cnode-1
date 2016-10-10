import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Bar from '../components/bar.js';
import Lists from '../components/lists.js';
import { fetchPost } from '../actions/index.js';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPost('topics', 'page=1'));
  }

  render() {
    return (
      <div>
        <Bar />
        <Lists />
      </div>
    );
  }
}

// function select(state) {
//   return state;
// }

export default connect()(Home);

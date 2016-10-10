import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Lists from '../components/lists.js';
import { fetchList } from '../actions/index.js';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    topics: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchList('topics', 1));
  }

  render() {
    const { topics, page, dispatch } = this.props;
    return (
      <div>
        <Lists
          items={topics}
          onClick={() => dispatch(fetchList('topics', page))}
        />
      </div>
    );
  }
}

function opeatorArray(array) {
  const arr = [];
  array.map(val => {
    val.map(v => {
      arr.push(v);
    });
  });
  return arr;
}

function select(state) {
  return {
    topics: opeatorArray(state.topics.page),
    page: state.topics.numbers
  };
}

export default connect(select)(Home);

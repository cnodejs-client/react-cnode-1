import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Lists from '../components/lists.js';
import { fetchList, fetchMoreList } from '../actions/index.js';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    topics: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    btn: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch(fetchList('topics', page));
  }

  render() {
    const { topics, page, dispatch, btn } = this.props;
    return (
      <div>
        <Lists
          items={topics}
          btn={btn}
          onClick={() => dispatch(fetchMoreList('topics', page))}
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
    page: state.topics.numbers,
    btn: state.topics.btn
  };
}

export default connect(select)(Home);

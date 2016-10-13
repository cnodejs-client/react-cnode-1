import React, { Component, PropTypes } from 'react';
import './index.less';

export default class Toast extends Component {
  static propTypes = {
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
      time: PropTypes.number.isRequired
  }

  static defaultProps = {
    title: 'toast',
    content: '',
    status: true,
    time: 500000
  }

  state = {
    show: true
  }

  componentDidMount() {
    const { time } = this.props;
    setTimeout(() => this.setState({show: !this.state.show}), time);
  }

  render() {
    const { title, content, status } = this.props;
    return (
      <div
        className={status ? 'toast toast_success': 'toast toast_fail'}
        style={{
          display: this.state.show ? 'block' : 'none'
        }}
      >
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

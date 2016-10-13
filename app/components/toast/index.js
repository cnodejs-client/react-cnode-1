import React, { Component, PropTypes } from 'react';
import './index.less';

export default class Toast extends Component {
  static propTypes = {
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
      time: PropTypes.number.isRequired,
      show: PropTypes.bool.isRequired
  }

  static defaultProps = {
    title: 'toast',
    content: '',
    status: true,
    time: 2000,
    show: false
  }

  state = {
    show: this.props.show
  }

  componentDidMount() {
    const { time, show } = this.props;
    if (show) {
      setTimeout(() => this.setState({show: false}), time);
    }
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

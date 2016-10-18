import React, { Component } from 'react';
import './index.less';

export default class Toast extends Component {
  state = {
    show: false,
    status: false,
    title: '',
    content: ''
  }

  componentWillUnmount() {
    clearTimeout(this.time);
  }

  toastSuccess(content, title = 'Success', time = 1000) {
    this.setState({
      show: true,
      content: content,
      title: title
    });
    setTimeout(() => this.setState({show: false}), time);
  }

  toastError(content, title = 'Error', time = 2000) {
    this.setState({
      show: true,
      content: content,
      title: title,
      status: true
    });
    this.time = setTimeout(() => this.setState({show: false}), time);
  }

  render() {
    const { title, content, status, show } = this.state;
    return (
        <div
          className={status ? 'toast toast_success': 'toast toast_fail'}
          style={{
            display: show ? 'block' : 'none'
          }}
        >
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
    );
  }
}

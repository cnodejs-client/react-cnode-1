import React, { Component } from 'react';
import { ToastContainer } from 'react-toastr';

export default class Toast extends Component {
  render() {
    return (
      <ToastContainer
        ref="container"
        toastMessageFactory={ToastMessageFactory}
        className="toast-top-right"
      />
    );
  }
}

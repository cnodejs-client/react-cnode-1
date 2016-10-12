import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Bar from '../components/bar.js';
import { loginOut } from '../actions/loginAction.js';

class NavBar extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    status: PropTypes.bool.isRequired,
    loginname: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    userid: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { children, status, loginname, avatarUrl, userid, dispatch } = this.props;
    return (
      <Bar
        children={children}
        status={status}
        loginname={loginname}
        avatarUrl={avatarUrl}
        userid={userid}
        onClick={() => dispatch(loginOut())}
      />
    );
  }
}

function select(state) {
  return {
    status: state.loginUserData.success,
    loginname: state.loginUserData.loginname,
    avatarUrl: state.loginUserData.avatar_url,
    userid: state.loginUserData.id
  };
}

export default connect(select)(NavBar);

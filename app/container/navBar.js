import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Bar from '../components/bar.js';
import { loginOutMiddware } from '../actions/loginAction.js';
import { getToken } from '../util/auth.js';
import { fetchLogin } from '../actions/loginAction.js';
import { getMessageCount } from '../actions/messageAction.js';

class NavBar extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    status: PropTypes.bool.isRequired,
    loginname: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    userid: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    if (getToken()) {
      dispatch(fetchLogin('accesstoken', getToken()));
      dispatch(getMessageCount());
    }
  }

  skipNext = () => this.props.router.replace('/');

  render() {
    const { children, status, loginname, avatarUrl, userid, dispatch } = this.props;
    return (
      <Bar
        className="navbar"
        children={children}
        status={status}
        loginname={loginname}
        avatarUrl={avatarUrl}
        userid={userid}
        onClick={() => dispatch(loginOutMiddware(this.skipNext))}
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

export default connect(select)(withRouter(NavBar));

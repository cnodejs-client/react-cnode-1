import React, { Component, PropTypes } from 'react';
import { AppBar, FlatButton, IconButton, Avatar } from 'material-ui';
import { Link } from 'react-router';

export default class Bar extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    status: PropTypes.bool.isRequired,
    loginname: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    userid: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { children, status, loginname, avatarUrl, onClick } = this.props;
    return (
      <div>
        <AppBar
          title={<img className="webstiteTitle" src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />}
          iconElementLeft={<IconButton />}
          iconElementRight={
            <div className="menu">
              <div>
                <Link to="/"><FlatButton label="首页" /></Link>
                <Link to="/post"><FlatButton label="发布话题" /></Link>
                <Link><FlatButton label="API" /></Link>
                <Link to="/about"><FlatButton label="关于" /></Link>
                {status ? <FlatButton label="登出" onClick={() => onClick()}/> : ''}
                {status ? '' : <Link to="/login"><FlatButton label="登录" /></Link>}
              </div>
              <div>
                {status ? <Link to={'/user/' + loginname}><Avatar src={avatarUrl}/></Link> : ''}
              </div>
            </div>
          }
        />
        <div className="wrap">{children}</div>
      </div>
    );
  }
}

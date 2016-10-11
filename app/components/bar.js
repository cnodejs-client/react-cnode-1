import React, { Component, PropTypes } from 'react';
import { AppBar, FlatButton, IconButton } from 'material-ui';
import { Link } from 'react-router';

export default class Bar extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  _handleClick(e) {
     e.preventDefault();
     window.console.log('here');
  }

  render() {
    return (
      <div>
        <AppBar
          title={<img className="webstiteTitle" src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />}
          iconElementLeft={<IconButton />}
          iconElementRight={
            <div className="menu">
              <Link to="/"><FlatButton label="首页" /></Link>
              <Link><FlatButton label="新手入门" /></Link>
              <Link><FlatButton label="API" /></Link>
              <Link><FlatButton label="关于" /></Link>
              <Link><FlatButton label="注册" /></Link>
              <Link><FlatButton label="登录" /></Link>
            </div>
          }
        />
        <div className="wrap">{this.props.children}</div>
      </div>
    );
  }
}

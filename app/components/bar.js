import React, { Component } from 'react';
import { AppBar, FlatButton, IconButton } from 'material-ui';

export default class Bar extends Component {
  render() {
    return (
      <div>
        <AppBar
          title={<img className="webstiteTitle" src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />}
          iconElementLeft={ <IconButton>{''}</IconButton>}
          iconElementRight={
            <div className="menu">
              <FlatButton label="首页" />
              <FlatButton label="新手入门" />
              <FlatButton label="API" />
              <FlatButton label="关于" />
              <FlatButton label="注册" />
              <FlatButton label="登录" />
            </div>
          }
        />
      </div>
    );
  }
}

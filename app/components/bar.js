import React, { Component } from 'react';
import { AppBar } from 'material-ui';

export default class Bar extends Component {
  render() {
    return (
      <div>
        <AppBar
          iconElementRight={
            <ul className="menus">
              <li>首页</li>
              <li>新手入门</li>
              <li>API</li>
              <li>关于</li>
              <li>注册</li>
              <li>登录</li>
            </ul>
          }
        />
      </div>
    );
  }
}

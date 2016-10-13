import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Card>
          <CardHeader
            title="首页 / 关于"
            className="header"
          />
        <CardText>
          <h3>关于</h3>
          <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
          <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
          <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
          <p>社区目前由 @alsotang 在维护，有问题请联系：<a href="https://github.com/alsotang">https://github.com/alsotang</a></p>
          <p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a></p>
          <h3 className="title">移动客户端</h3>
          <p>客户端由 @soliury 开发维护。</p>
          <p>源码地址： <a href="https://github.com/soliury/noder-react-native">https://github.com/soliury/noder-react-native</a> 。</p>
          <p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>
        </CardText>
        </Card>
      </div>
    );
  }
}

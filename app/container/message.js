import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Card, CardHeader, CardText, Divider } from 'material-ui';
import { getMessages } from '../actions/messageAction.js';

class Message extends Component {
  static propTypes = {
    hasRead: PropTypes.array.isRequired,
    notRead: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMessages());
  }

  render() {
    const { hasRead, notRead } = this.props;
    return (
      <div className="messages">
      <Card className="card">
        <CardHeader
          title="主页 / 新消息"
          className="recent_info"
        />
        {
          notRead.map((v, i) =>
          <div key={i}>
            <CardText>
            {
              <div>
                <Link to={'/user/' + v.author.loginname}>{v.author.loginname}</Link>
                {
                  <span>  回复了你的话题  <Link to={'/user/' + v.author.loginname}>{v.topic.title}</Link></span>
                }
              </div>
            }
            </CardText>
            <Divider />
          </div>
          )
        }
      </Card>
      <Card className="card">
        <CardHeader
          title="过往消息"
          className="recent_info"
        />
        {
          hasRead.map((v, i) =>
            <div key={i}>
              <CardText>
              {
                <div>
                  <Link to={'/user/' + v.author.loginname}>{v.author.loginname}</Link>
                  {
                    <span>  回复了你的话题  <Link to={'/topic/' + v.topic.id}>{v.topic.title}</Link></span>
                  }
                </div>
              }
              </CardText>
              <Divider />
            </div>
          )
        }
      </Card>
      </div>
    );
  }
}

function select(state) {
  return {
    hasRead: state.messages.has_read,
    notRead: state.messages.not_read
  };
}

export default connect(select)(Message);

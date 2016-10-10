import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDetail } from '../actions/index.js';
import { Link } from 'react-router';
import { Card, CardHeader, CardTitle, CardText, List, ListItem, Avatar, Divider } from 'material-ui';
// import RichEditor from './richeditor/index.jsx';

class Detail extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    topicDetail: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(fetchDetail('topic', params.id));
  }

  render() {
    const { topicDetail } = this.props;
    return(
      <div className="detail">
        <Card className="card">
          <CardHeader
            title={topicDetail.author.loginname}
            subtitle={'发布于' + topicDetail.create_at}
            avatar={
              <Link to={'/user/' + topicDetail.author.loginname}><Avatar src={topicDetail.author.avatar_url} /></Link>
            }
          />
          <CardTitle title={topicDetail.title}/>
          <CardText dangerouslySetInnerHTML={{__html: topicDetail.archive}}/>
          <CardHeader
            title="评论"
          />
          {
            topicDetail.replies.map((val, index) =>
              <List key={index}>
                <ListItem
                  leftAvatar={<Link to={'/user/' + val.author.loginname}><Avatar title={val.author.loginname} src={val.author.avatar_url} /></Link>}
                  primaryText={<div dangerouslySetInnerHTML={{__html: val.content }}/>}
                />
                <Divider inset/>
              </List>
            )
          }
        </Card>
        <Card className="card">
          {/* <RichEditor /> */}
        </Card>
      </div>
    );
  }
}

function select(state) {
  return {
    topicDetail: state.topicDetail
  };
}

export default connect(select)(Detail);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { fetchPost } from '../actions/index.js';
// import { Link } from 'react-router';
// import { Card, CardHeader, CardTitle, CardText, List, ListItem, Avatar, Divider } from 'material-ui';
// import RichEditor from './richeditor/index.jsx';

class Detail extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const { dispatch, params } = this.props;
    // dispatch(fetchPost('topic', params.id));
  }

  render() {
    return(
      <div className="detail">
        <div>hello</div>
        {/* <Card className="card">
          <CardHeader
            title={ this.state.content.loginname }
            subtitle={ '发布于' + this.state.content.post_time }
            avatar={ <Link to={'/user/' + this.state.content.loginname }><Avatar src={ this.state.content.avatar_url } /></Link> }
          />
          <CardTitle title={ this.state.content.title } />
          <CardText dangerouslySetInnerHTML={{ __html: this.state.content.archive }}></CardText>
          <CardHeader
            title="评论"
          />
          {
            this.state.content.comments.map((val, index) =>
              <List key={ index }>
                <ListItem
                  leftAvatar={ <Link to={'/user/' + val.author.loginname }><Avatar title={ val.author.loginname } src={ val.author.avatar_url } /></Link> }
                  primaryText={ <div dangerouslySetInnerHTML={{__html: val.content }} /> }
                />
                <Divider inset={ true } />
              </List>
            )
          }
        </Card>
        <Card className="card">
          <RichEditor />
        </Card> */}
      </div>
    );
  }
}

export default connect()(Detail);

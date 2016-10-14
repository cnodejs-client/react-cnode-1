import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';
import { Card, CardHeader, CardText, Divider} from 'material-ui';
import { fetchUser } from '../actions/index.js';
import { fetchUserCollectTopics } from '../actions/collectAction.js';

//初始语言汉语
moment.locale('zh-cn');
const github = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=';

class User extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    loginName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    createAt: PropTypes.string.isRequired,
    recentTopics: PropTypes.array.isRequired,
    recentReplies: PropTypes.array.isRequired,
    userCollect: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, params } = this.props;
    dispatch(fetchUser('user', params.username));
    dispatch(fetchUserCollectTopics(params.username));
  }

  render() {
    const { loginName, score, avatarUrl, createAt, recentTopics, recentReplies, userCollect } = this.props;
    return (
      <div className="user">
        <Card className="card">
          <CardHeader
            title={loginName}
            subtitle={'积分：' + score}
            avatar={avatarUrl}
          />
          <a className="github" href={'https://github.com/' + loginName}>
            <img src={github} />
          </a>
          <CardText>
            注册时间: {moment(createAt).fromNow()}
          </CardText>
        </Card>
        <Card className="card">
          <CardHeader
            title="最近创建的话题"
            className="recent_info"
          />
          {
            recentTopics.map((val, i) =>
              <Link to={'/topic/' + val.id } key={i}>
                <CardText>
                  <div>{val.title}</div>
                </CardText>
                <Divider />
              </Link>
            )
          }
        </Card>
        <Card className="card">
          <CardHeader
            title="最近参与的话题"
            className="recent_info"
          />
          {
            recentReplies.map((val, i) =>
              <Link to={'/topic/' + val.id} key={i}>
                <CardText>
                  <div>{val.title}</div>
                </CardText>
                <Divider />
              </Link>
            )
          }
        </Card>
        <Card className="card">
          <CardHeader
            title="收藏的话题"
            className="recent_info"
          />
          {
            userCollect.map((val, i) =>
              <Link to={'/topic/' + val.id} key={i}>
                <CardText>
                  <div>{val.title}</div>
                </CardText>
                <Divider />
              </Link>
            )
          }
        </Card>
      </div>
    );
  }
}

function select(state) {
  return {
    loginName: state.userDetail.loginname || '',
    score: state.userDetail.score || 0,
    avatarUrl: state.userDetail.avatar_url || '',
    createAt: state.userDetail.create_at || '',
    recentTopics: state.userDetail.recent_topics || [],
    recentReplies: state.userDetail.recent_replies || [],
    userCollect: state.userDetail.user_collect
  };
}

export default connect(select)(User);

import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { TextField, Card, CardHeader, CardText, FlatButton } from 'material-ui';
import { fetchLogin } from '../actions/loginAction.js';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      textValue: ''
    };
  }

  skipNext = () => this.props.router.replace('/');

  _handleClick() {
    const { dispatch } = this.props;
    const accessToken = this.state.textValue;
    dispatch(fetchLogin('accesstoken', accessToken, this.skipNext));
  }

  _handleOnChange(e) {
    e.preventDefault();
    this.setState({
      textValue: e.target.value
    });
  }

  render() {
    return (
      <div className="login">
        <Card>
          <CardHeader
            title="首页 / 登录"
            className="header"
          />
          <CardText className="loginMain">
            <TextField
              hintText="accessToken"
              onChange={(e) => this._handleOnChange(e)}
              value={this.state.textValue}
            />
            <FlatButton
              label="登录"
              onClick={() => this._handleClick()}
              backgroundColor="rgba(0, 188, 212, 1)"
              hoverColor="rgba(0, 188, 212, 0.5)"
              style={{
                width: '50px',
                color: '#fff',
                display: 'block',
                marginTop: '20px'
              }}
            />
          </CardText>
        </Card>
      </div>
    );
  }
}

export default connect()(withRouter(Login));

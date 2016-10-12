import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText, FlatButton, SelectField, MenuItem, TextField } from 'material-ui';
import RichEditor from '../components/richeditor/index.js';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: 'default'
    };
  }

  _handleClick() {}

  _onhandleClick(state) {}

  render() {
    return (
      <div className="post">
      <Card>
        <CardHeader
          title="首页 / 发布话题"
          className="header"
        />
        <CardText className="postMain">
          <div>
            <SelectField value={this.state.selectValue} onChange={this.handleChange}>
              <MenuItem value="default" primaryText="请选择板块" />
              <MenuItem value="share" primaryText="分享" />
              <MenuItem value="ask" primaryText="问答" />
              <MenuItem value="job" primaryText="招聘" />
            </SelectField>
          </div>
          <div>
            <TextField
              className="postTitle"
              hintText="标题字数10字以上"
            />
          </div>
          <RichEditor
            onHandleClick={(state) => this._onhandleClick(state)}
          />
        </CardText>
      </Card>
      </div>
    );
  }
}

export default connect()(Post);

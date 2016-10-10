import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { List, ListItem, Avatar, Divider, FlatButton, CircularProgress } from 'material-ui';
// import { filter } from '../filter.js';

class Lists extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    return (
      <div className="wrap">
        {
          this.props.items.map((v, i) =>
            <Link to={'/topic/' + v.id } key={i}>
              <List>
                <ListItem
                  leftAvatar={<Avatar src={ v.author.avatar_url } />}
                  // rightIcon={ v.tab ?<div className="list_icon">{ filter(v.tab) }</div> :<div></div> }
                  primaryText={v.title}
                  secondaryText={v.author.loginname +' '+ v.reply_count+'/'+v.visit_count}
                />
              </List>
              <Divider />
            </Link>
          )
        }
        <FlatButton
          label={"点击加载"}
          icon={
              <CircularProgress
                // innerStyle={{
                //   visibility: this.state.show ? 'visible' : 'hidden'
                // }}
                className="circular_progress"
                size={0.3}
                color="rgb(0, 188, 212)"
              />
          }
          onClick={() => this.handleClick()}
          style={{
            width: '100%',
            color: '#333'
          }}/>
      </div>
    );
  }
}

export default Lists;

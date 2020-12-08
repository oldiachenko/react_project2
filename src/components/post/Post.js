import React, {Component} from 'react';
import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import PostInfo from "./PostInfo";

class Post extends Component {
  render() {
    let {item, match:{url}} = this.props;
    return (
      <div>
        Post No:{item.id} Title: {item.title} <Link to={`${url}/${item.id}`}>Post info</Link>
        <Switch>
          <Route path={`${url}/${item.id}`} render={() => {
            return <PostInfo item={item}/>
          }}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Post);
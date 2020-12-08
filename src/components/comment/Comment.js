import React, {Component} from 'react';
import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import CommentInfo from "./CommentInfo";

class Comment extends Component {
  render() {
    let {item, match:{url}} = this.props;
    return (
      <div>
        {item.id} - {item.name}  <Link to={`${url}/${item.id}`}>Show Comment</Link>

        <Switch>
          <Route path={`${url}/${item.id}`} render={() => {
            return <CommentInfo item={item}/>
          }}/>
        </Switch>

      </div>
    );
  }
}

export default withRouter(Comment);
import React, {Component} from 'react';
import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import UserInfo from "./UserInfo";

class User extends Component {
  render() {

    let {item, match:{url}} = this.props;

    return (
      <div>
        No: {item.id} - {item.name} <Link to={`${url}/${item.id}`}>User info</Link>
        <Switch>
          <Route path={`${url}/${item.id}`} render={() => {
            return <UserInfo item={item}/>
          }}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(User);
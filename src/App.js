import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to={'/users'}> Users </Link>
            </li>
            <li>
              <Link to={'/posts'}> Posts </Link>
            </li>
            <li>
              <Link to={'/comments'}> Comments </Link>
            </li>
          </ul>

          <Switch>
            <Route path={'/users'} render={() => <AllUsers/>}/>
            <Route path={'/posts'} render={() => <AllPosts/>}/>
            <Route path={'/comments'} render={() => <AllComments/>}/>
          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;

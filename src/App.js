import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
              <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/users'}>Users</Link>
              </li>
              <li>
                <Link to={'/posts'}>Posts</Link>
              </li>
              <li>
                <Link to={'/comments'}>Comments</Link>
              </li>

            </ul>
          </nav>

         <Switch>
           <Route path={'/users'} render={ () => {
             return <AllUsers/>
           }}/>
           <Route path={'/posts'} render={ () => {
             return <AllPosts/>
           }}/>
           <Route path={'/comments'} render={ () => {
             return <AllComments/>
           }}/>
         </Switch>
        </div>
      </Router>

    );
  }
}

export default App;


import React, {Component} from 'react';
import UserServices from "../../services/UserServices";
import User from "../user/User";
import './AllUsers.css'
import {Route, Switch, withRouter} from "react-router-dom";
import UserCard from "../user/UserCard";

class AllUsers extends Component {
  state = {users: []}
  userServices = new UserServices();

  async componentDidMount() {
    let users = await this.userServices.allUsers();
    this.setState({users})
  }

  render() {
    let {users} = this.state;
    let {match: {url}} = this.props;
    return (
      <div>
        <div className={'title'}>
          <div className={'usersTitle'}>Users</div>
        </div>

        <div className={'allUsers'}>
          <div className={'userNames'}>
            {users.map(value => <User item={value} key={value.id}/>)}
          </div>

          <div>
            <Switch>
              <Route path={url + `/:id`} render={(props) => {
                let {match: {params: {id}}} = props;
                return <UserCard {...props} key={id}/>
              }}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AllUsers);
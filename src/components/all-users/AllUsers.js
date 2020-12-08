import React, {Component} from 'react';
import {UserServices} from "../services/UserServices";
import User from "../user/User";

class AllUsers extends Component {

  userServices = new UserServices ();
  state={users:[]}

  async componentDidMount() {
    let users = await this.userServices.getAllUsers();
    this.setState({users})
  }

  render() {
    let {users} = this.state;
    return (
      <div>
        {users.map(value => <User item={value} key={value.id}/>)}
      </div>
    );
  }
}

export default AllUsers;
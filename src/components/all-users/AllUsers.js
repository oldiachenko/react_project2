import React, {Component} from 'react';
import User from "../user/User";
import {UserService} from "../services/UserService";


class AllUsers extends Component {

  userService = new UserService()

  state = {users: [], chosenOne:null}

  onUserChoice = (id) => {this.userService.getUserById(id).then(value => this.setState({chosenOne: value}))}

  componentDidMount() {
    this.userService.getAllUsers().then(value => this.setState({users: value}))
  }

  render() {
    let {users, chosenOne} = this.state;
    return (
      <div>
        {
          users.map(value => (<User item={value} key={value.id} onUserChoice={this.onUserChoice} isShowButton={true}/>))
        }

          {chosenOne && <h2><User item={chosenOne} isShowButton={false}/></h2>}

      </div>
    );
  }
}

export default AllUsers;
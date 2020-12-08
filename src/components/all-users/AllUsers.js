import React, {Component} from 'react';
import User from "../user/User";
import {UserService} from "../services/UserService";

class AllUsers extends Component {

  state={users:[], chosenOne: null}
  userService = new UserService()

componentDidMount() {
  this.userService.getAllUsers().then(value => this.setState({users:value}))
}
onUserChoice = (id) => (this.userService.gerUserById(id).then(value => this.setState({chosenOne:value})))


  render() {
    let {users, chosenOne} = this.state;
    return (
      <div>
        {users.map(value=> <User item={value} key={value.id} onUserChoice={this.onUserChoice} isShowBtn={true}/>)}

        {chosenOne && <h3><User item={chosenOne} isShowBtn={false}/></h3>}

      </div>
    );
  }
}

export default AllUsers;
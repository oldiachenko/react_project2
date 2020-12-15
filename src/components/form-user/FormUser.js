import React, {Component} from 'react';
import User from "./User";
import UserServices from "../../services/userServices";

class FormUser extends Component {
  myForm = React.createRef();
  userServices = new UserServices();

  state = {inputValue: '', user: null, error: false}

  prevDefault = (e) => {
    e.preventDefault();
  }

  commitState = (e) => {
    this.setState({inputValue: e.target.value})
  }

  async selectUser(id) {
    try{
      let user = await this.userServices.user(id)
      this.setState({user})
    }
      catch (e) {
      e ? this.setState({error: true}) : this.setState({error: false})
      }

  }

  render() {
    let {user, inputValue, error} = this.state;
    console.log(error);
    return (
      <div>
        <form onSubmit={this.prevDefault} ref={this.myForm} >
          <input onInput={this.commitState} value={inputValue} type={'number'}/>
          <button onClick={() =>
            this.selectUser(this.myForm.current[0].value)
          }>Get User
          </button>
        </form>
        <br/>
        {user && <User item={user} key={user.id}/>}
      </div>
    );
  }
}


export default FormUser;
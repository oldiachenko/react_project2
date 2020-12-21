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
      this.setState({user, error:false})
    }
      catch (error) {
      this.setState({error: true})
      }

  }

  render() {
    let {user, inputValue, error} = this.state;
    const onError = error ? 'Unavailable data' : null;
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
        {user && !error && <User item={user} key={user.id}/>}
        {onError}
      </div>
    );
  }
}


export default FormUser;
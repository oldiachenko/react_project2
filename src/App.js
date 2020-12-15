import React, {Component} from 'react';
import FormUser from "./components/form-user/FormUser";
import FormPost from "./components/form-posts/FormPost";

class App extends Component {
  render() {
    return (
      <div>
        <FormUser/>
        <br/>
        <FormPost/>
      </div>
    );
  }
}

export default App;

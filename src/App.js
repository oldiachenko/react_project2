import React, {Component} from 'react';
import Counter from "./components/Counter";
import Todo from "./components/Todo";


class App extends Component {

  render() {

    return (
      <div>
        <Counter/>
        <br/>
        <Todo/>
      </div>
    );
  }
}

export default App;

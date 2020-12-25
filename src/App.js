import React, {Component} from 'react';
import Counter from "./components/Counter";
import Person from "./components/Person";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <br/>
        <Person/>
        <br/>
        <h3>Use Reducer</h3>
        <Todo/>
      </div>
    );
  }
}

export default App;

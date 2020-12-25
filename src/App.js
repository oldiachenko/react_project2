import React, {Component} from 'react';
import Counter from "./components/Counter";
import Person from "./components/Person";
import Todo from "./components/Todo";
import './App.css'
import TestUseEffect from "./components/TestUseEffect";
import UseMemo from "./components/UseMemo";

class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <br/>
        <Person/>
        <br/>
        <h2 className={'hookName'}>Use Reducer</h2>
        <Todo/>
        <br/>
        <h2 className={'hookName'}>Use Effect (Did Mount, Will Unmount) </h2>
        <TestUseEffect/>
        <br/>
        <h2 className={'hookName'}>Use Memo</h2>
        <UseMemo/>
      </div>
    );
  }
}

export default App;

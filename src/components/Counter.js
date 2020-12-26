import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decCounter, fetchTodos, incCounter, resetCounter} from "../redux/action-creators";
import {useEffect} from "react";


function Counter() {
  const {counter, todos} = useSelector(({counter: {counter}, todos: {todos}}) => ({counter, todos}))
  const dispatch = useDispatch()


  const handleInc = () => dispatch(incCounter())
  const handleDec = () => dispatch(decCounter())
  const handleReset = () => dispatch(resetCounter())

  // const fetchTodos = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //     const data = await response.json();
  //     dispatch(setTodos(data))
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div>
      Counter: {counter}
      <br/>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
      <button onClick={handleReset}>Reset</button>
      {
        todos.map((todo) => (
            <div>
              {todo.id} - {todo.title}
            </div>
          )
        )
      }

    </div>
  );
}

export default Counter;
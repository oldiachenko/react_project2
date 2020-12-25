import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from "react";

function Todo() {
  const counter = useSelector(({counter}) => counter)
  const dispatch = useDispatch();

  const {userId, title, completed} = useSelector(({userId, title, completed}) => ({userId, title, completed}))

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
      .then(response => response.json())
      .then(json => dispatch({type: 'SET_TODO', payload: json}))
  }, [counter, dispatch])

  const onStatusChange = () => {
    dispatch({type: 'CHANGE_TODO_STATUS'})
  }
  const onTitleChange = () => {
    dispatch({type: 'CHANGE_TODO_TITLE', payload: Math.random()})
  }
  return (
    <div>
      {
        !!userId &&
        <>
          {userId} - {title} - {completed.toString()}
        </>
      }
      <br/>
      <button onClick={onStatusChange}>change status</button>
      <button onClick={onTitleChange}>change title</button>
    </div>
  );
}

export default Todo;
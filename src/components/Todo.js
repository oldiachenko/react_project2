import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {useReducer} from "react";


const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODO': {
      return action.payload
    }
    case 'CHANGE_TODO_STATUS': {
      return {
        ...state,
        completed: !state.completed
      }
    }
    case 'CHANGE_TODO_TITLE': {
      return {
        ...state,
        title: action.payload
      }
    }
    default : {
      return state
    }
  }
}

const initialState = {
  completed: false,
  id: null,
  title: "",
  userId: null
}

function Todo() {
  const [counter, setCounter] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState)

  const onClickHandler = () => {
    setCounter((prevValue) => prevValue + 1)
  }

  const onStatusChange = () => {
    dispatch({type: 'CHANGE_TODO_STATUS'})
  }

  const onTitleChange = () => {
    dispatch ({type:'CHANGE_TODO_TITLE', payload: Math.random()})
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
      .then(response => response.json())
      .then(json => dispatch({type:'SET_TODO', payload:json}))
  }, [counter])

  return (

    <div>
      <button onClick={onClickHandler}>inc</button>
      <button onClick={onStatusChange}>change status</button>
      <button onClick={onTitleChange}>change title</button>

      <div>Counter = {counter}</div>
      {
        !!state &&
          <>
            <h3>{state.id}</h3>
            <h3>{state.title}</h3>
            <h3>{state.completed.toString()}</h3>
          </>
      }
    </div>
  );
}

export default Todo;
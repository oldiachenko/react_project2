import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

function Counter() {
  const counter = useSelector(({counter}) => counter)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({type: 'INC_COUNTER'})}>inc</button>
      <button onClick={() => dispatch({type: 'DEC_COUNTER'})}>dec</button>
      <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
      <br/>
      Counter: {counter}
    </div>
  );
}

export default Counter;
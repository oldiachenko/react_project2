import React from 'react';
import {useState} from "react";
import {useEffect} from "react";

function Counter() {
  const [counter, setCounter] = useState(1);
  const [user, setUser] = useState()
  const incrCounter = () => {
    setCounter((prevState) => prevState + 1)
  }
  const decrCounter = () => {
    setCounter((prevValue) => prevValue - 1)
  }
  const resCounter = () => {
    setCounter(1)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
      .then(response => response.json())
      .then(user => setUser(user))
  }, [counter])

  return (
    <div>
      <button onClick={incrCounter}>Increment</button>
      <button onClick={decrCounter}>Decrement</button>
      <button onClick={resCounter}>Reset</button>
      <div>
        Counter value: {counter}
      </div>
      <div>
        {
          !!user &&
          <>
            {user.id} - {user.name} - {user.email}
          </>
        }  
      </div>

    </div>
  );
}

export default Counter;
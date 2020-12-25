import React from 'react';
import {useState} from "react";
import {useEffect} from "react";

function TestUseEffect() {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('component did mount');
    return () => {
      console.log('component will unmount');
    }
  },[counter])

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
      {
        isVisible &&
        <div onClick={() => setCounter((prevValue) => prevValue + 1)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse quibusdam sed
          voluptatibus. At debitis distinctio, magni optio possimus rem similique temporibus totam voluptates. Aliquid
          beatae eligendi error odit voluptate. {counter}
        </div>
      }
    </div>
  );
}

export default TestUseEffect;
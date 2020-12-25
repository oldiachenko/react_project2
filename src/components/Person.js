import React from 'react';
import {useState} from "react";
import {useEffect} from "react";

function Person() {
  const [person, setAge] = useState({name: 'Oleg', age: 35})
  const agePlusHandler = () => {
    setAge((prevValue) => ({
      ...prevValue,
      age: prevValue.age + 1
    }))
  }

  const ageMinHandler = () => {
    setAge((prevValue) => ({
      ...prevValue,
        age: prevValue.age - 1
    }))
  }

  const ageResHandler = () => {
    setAge((prevValue) => (
      {...prevValue, age: 35}
    ))
  }

  useEffect(() => {
    console.log('i was called')
  }, [person.age])

  return (
    <div>
      <button onClick={agePlusHandler}>Age+</button>
      <button onClick={ageMinHandler}>Age-</button>
      <button onClick={ageResHandler}>Reset</button>
      <div>
        Age: {person.age}
      </div>
    </div>
  );
}

export default Person;
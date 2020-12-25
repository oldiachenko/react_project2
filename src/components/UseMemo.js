import React from 'react';
import {useState} from "react";
import {useMemo} from "react";

function UseMemo() {
  const [arr, setArray] = useState([2, 34, 56, 465, 345, 687, 89983, 3, 567, 76])
  // console.log(arr);
  const [sortOrder, setSortOrder] = useState('desc')

  const totalPrice = useMemo(() => {
    return arr.reduce((acc, el) => (acc += el), 0)
  }, [arr])

  const sorted = useMemo(() => {
    const arrClone = [...arr]
    if (sortOrder === 'asc') {
      return arrClone.sort((a, b) => a - b)
    }
    if (sortOrder === 'desc') {
      return arrClone.sort((a, b) => b - a)
    }
  }, [arr, sortOrder])
  console.log(sorted);
  return (
    <div>
      <button onClick={() => setArray([...arr, Math.random()])}>Add item to arr</button>
      <button onClick={() => setSortOrder((prev) => prev === 'desc' ? 'asc' : 'desc')}>Sort array</button>
   <div>
     {totalPrice}
   </div>
    </div>
  );
}

export default UseMemo;
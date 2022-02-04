import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


const Counter = () => {

    const [ count, setCount ] = useState(0)

    useEffect(() => {
        console.log('use effect was triggered!!!!')
        setCount(count + 1)
    }, [])

   const myState = useSelector((state) => state.groceries)

   console.log('from the selector!!! ', myState)

  return (
    <div>
      <h3>Counter Demo</h3>
      <Link to="/"> Switch to Groceries </Link>
      <h3>Your counter is at {count} </h3>
      <div>
        <button onClick={() => setCount(count - 1)}> - </button>
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>
    </div>
  );
};

export default Counter;



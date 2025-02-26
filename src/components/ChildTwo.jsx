import React, { useContext } from 'react'
import abc from '../Lerncontexto';

const ChildTwo = () => {
const abe=useContext(abc);

  return (
    <div>
<h1>Number {abe}</h1>
    </div>
  )
}

export default ChildTwo
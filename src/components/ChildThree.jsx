import React, { useContext } from 'react'
import abc from '../Lerncontexto'


const ChildThree = () => {

  const data=useContext(abc);

    

  return (
    <div>
      
  <h1>name is {data}</h1>

   </div>

  )
}

export default ChildThree
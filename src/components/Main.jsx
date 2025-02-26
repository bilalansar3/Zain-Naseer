import React, { use } from 'react'
import ChildThree from './ChildThree';
import aa from './context/UserContext';
const Main = () => {

    const name="Bilal Ansar";
    const age=21;

  return (
    <div>
<aa.Provider value={name}>
    <ChildThree/>
</aa.Provider>

    </div>
  )
}

export default Main
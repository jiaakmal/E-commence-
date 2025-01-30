import MyContext from './myContext';
import { useState } from "react";

function MyState({children}) {
    const [loading , setLoading] = useState(false)
  return (
    <MyContext.Provider value={{loading, setLoading}}>
       {children}
    </MyContext.Provider>
  )
}

export default MyState
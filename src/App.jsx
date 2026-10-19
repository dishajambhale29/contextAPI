import React from "react"
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UsercontextProvider"



function App() {
  

  return (
   <UserContextProvider>
   <h1>React context globle variable </h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App

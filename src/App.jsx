import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'

const App = () => {
  return (
    <div style={{ display: 'flex'}}>  
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
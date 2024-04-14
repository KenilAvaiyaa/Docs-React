import React from 'react'
import Backgroud from './components/Backgroud'
import Forground from './components/Forground'

const App = () => {
  return (
    <div>
      <div className=" relative w-[100vw] h-[100vh] bg-zinc-800 ">
        <Backgroud />
        <Forground />
      </div>
    </div>
  )
}

export default App

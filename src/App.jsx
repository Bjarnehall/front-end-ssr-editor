import { useState } from 'react'
import HelloJson from './components/HelloJson'
import UpdateDoc from "./components/UpdateDoc";

function App() {

  return (
    <>
    <h1><HelloJson/></h1>
    <h2>Test av Update</h2>
    <UpdateDoc id={1} />
    </>
  )
}

export default App

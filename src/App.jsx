import { useState } from 'react'
import HelloJson from './components/HelloJson'
import UpdateDoc from "./components/UpdateDoc";
import DeleteDoc from './components/DeleteDoc'

function App() {

  return (
    <>
    <h1><HelloJson/></h1>
    <h2>Test av UpdateDoc</h2>
    <UpdateDoc id={4} />
    <DeleteDoc/>
    </>
  )
}

export default App

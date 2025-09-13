import { useState } from 'react'
import Nav from "./components/Nav";
import HelloJson from './components/HelloJson'
import UpdateDoc from "./components/UpdateDoc";
import DeleteDoc from './components/DeleteDoc'

function App() {
  const [view, setView] = useState("home");

  return (
    <>
      <Nav current={view} onNavigate={setView} />

      {view === "home"   && <h2>Välkommen!</h2>}
      {view === "update" && (
        <>
          <h2>Uppdatera dokument</h2>
          <UpdateDoc />
        </>
      )}
      {view === "delete" && (
        <>
          <h2>Radera dokument</h2>
          <DeleteDoc />
        </>
      )}
    </>
  )
}

export default App

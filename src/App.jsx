import { useState } from 'react'
import Nav from "./components/Nav";
import UpdateDoc from "./components/UpdateDoc";
import DeleteDoc from './components/DeleteDoc'
import AllDocs from "./components/AllDocs";
import CreateDoc from "./components/CreateDoc";

function App() {
  const [view, setView] = useState("editor");
  const [editDoc, setDoc] = useState(null);

  return (
    <>
      <Nav current={view} onNavigate={setView} />

      {view === "about"   && <h2>About this app</h2>}


      {view === "create" && (
        <>
          <CreateDoc />
        </>
      )}

      {view === "editor" && !editDoc && (
        <AllDocs onEdit={doc => setDoc(doc)} />
      )}

      {view === "editor" && editDoc && (
        <>
          <button onClick={() => setDoc(null)}>Back to documents</button>
          <UpdateDoc preselectedDoc={editDoc} />
          <DeleteDoc preselectedDoc={editDoc} />
        </>
      )}
    </>
  )
}

export default App

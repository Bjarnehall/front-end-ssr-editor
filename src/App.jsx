import "./App.css";
import { useState } from 'react'
import Nav from "./components/Nav";
import UpdateDoc from "./components/UpdateDoc";
import DeleteDoc from './components/DeleteDoc'
import AllDocs from "./components/AllDocs";
import CreateDoc from "./components/CreateDoc";
import About from "./components/About";

function App() {
  const [view, setView] = useState("editor");
  const [editDoc, setDoc] = useState(null);

  return (
    <div className='container'>
      <Nav current={view} onNavigate={setView} />

      <div className='editor'>
        {view === "about"   && (
          <>
          <About />
          </>
        )}
          
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
            <button className="back-button" onClick={() => setDoc(null)}>Back to documents</button>
            <UpdateDoc preselectedDoc={editDoc} />
            <DeleteDoc preselectedDoc={editDoc} />
          </>
        )}
      </div>
    </div>
  )
}

export default App

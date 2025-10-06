import "./index.css";
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import UpdateDoc from "./components/UpdateDoc";
import DeleteDoc from './components/DeleteDoc'
import AllDocs from "./components/AllDocs";
import CreateDoc from "./components/CreateDoc";
import About from "./components/About";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import UserList from "./components/UserList";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [editDoc, setDoc] = useState(null);

  return (
    <div className='container'>
      <Header />
      <Nav />

      <div className='editor'>
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/create" element={<CreateDoc />} />

          <Route 
            path="/docs" 
            element={<AllDocs onEdit={doc => { setDoc(doc); navigate("/edit"); }} />} 
          />

          <Route 
            path="/edit" 
            element={
              <>
                <button 
                  className="back-button" 
                  onClick={() => navigate("/docs")}
                >
                  Back to documents
                </button>
                
                <UpdateDoc preselectedDoc={editDoc} />
                <DeleteDoc 
                  preselectedDoc={editDoc} 
                  onDelete={() => { navigate("/docs"); }} 
                />
              </>
            } 
          />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

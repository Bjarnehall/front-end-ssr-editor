import "./index.css";
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import UpdateDoc from "./components/docs/UpdateDoc";
import DeleteDoc from './components/docs/DeleteDoc'
import AllDocs from "./components/docs/AllDocs";
import CreateDoc from "./components/docs/CreateDoc";
import About from "./components/About";
import Header from "./components/Header";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import UserList from "./components/user/UserList";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [editDoc, setDoc] = useState(null);

  return (
    <div className='container'>
      <Header />
      <Nav />

      <div className='editor'>
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/create" element={
            <ProtectedRoute>
              <CreateDoc />
            </ProtectedRoute>
          } />

          <Route path="/docs" element={
              <ProtectedRoute>
                  <AllDocs onEdit={doc => setDoc(doc)} />
              </ProtectedRoute>
          } />

          <Route 
            path="/edit" 
            element={
              <>
                <button 
                  className="back-button" 
                  onClick={() => setDoc(null)}
                >
                  Back to documents
                </button>

                <div className="edit-section">
                  <UpdateDoc preselectedDoc={editDoc} />
                  <DeleteDoc 
                    preselectedDoc={editDoc} 
                    onDelete={() => {setDoc(null);}} 
                  />
                </div>
              </>
            } 
          />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/users" element={
            <ProtectedRoute>
                <UserList />
            </ProtectedRoute>
            } />
        </Routes>
      </div>
    </div>
  )
}

export default App

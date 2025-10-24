import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import "./index.css";
import {
    Nav,
    Home,
    About,
    Header,
    Login,
    Register,
    UpdateDoc,
    DeleteDoc,
    AllDocs,
    CreateDoc,
    UserList,
    ProtectedRoute,
    InviteUser,
} from './components/components';

function App() {
  // Use state to handle which document to access when entering
  // edit mode.
  const [editDoc, setDoc] = useState(null);

  return (
    <div className='container'>
      {/* Use header and nav component directly in app so be visable on all pages */}
      <Header />
      <Nav />

      <div className='editor'>
        {/* Define diffrent routes for page. Use ProtectedROute to stop user
        accessing certain routes*/}
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/edit" element={
              <ProtectedRoute>
              <div className="edit-section">
                  <UpdateDoc preselectedDoc={editDoc} />
                  <DeleteDoc preselectedDoc={editDoc} 
                      onDelete={() => {setDoc(null);}} 
                  />
                  <InviteUser docId={editDoc?._id} />
              </div>
              </ProtectedRoute>
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

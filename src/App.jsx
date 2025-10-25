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

/*
App component handles the whole page by rendering subcomponents, the subcomponents
loaded and their behavior is dependent on user behaviour props sent and states
of variables
*/
function App() {
  // Usestate to handle document and username.
  const [editDoc, setDoc] = useState(null);
  const [userName, setUserName] = useState(localStorage.getItem("username") || "");

  return (
    <div className='container'>
      {/* Use header and nav component directly in app so be visable on all pages */}
      <Header userName={userName}/>
      <Nav onUserNameUpdate={setUserName} />

      <div className='editor'>
        {/* Define diffrent routes for page. Use ProtectedROute to stop user
        accessing certain routes*/}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Register />} />
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
                  <DeleteDoc preselectedDoc={editDoc} onDelete={() => {setDoc(null);}} />
                  <InviteUser docId={editDoc?._id} />
              </div>
              </ProtectedRoute>
            } 
          />
          <Route path="/login" element={<Login onUserNameUpdate={setUserName} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={
            <ProtectedRoute>
                <UserList onUserNameUpdate={setUserName}/>
            </ProtectedRoute>
            } />
        </Routes>
      </div>
    </div>
  )
}

export default App

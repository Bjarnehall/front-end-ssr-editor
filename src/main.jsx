import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Loads App component which handles the whole application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* for deployment */ }
     <BrowserRouter basename="/front-end-ssr-editor">
    {/* for local */}
    {/* <BrowserRouter> */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)

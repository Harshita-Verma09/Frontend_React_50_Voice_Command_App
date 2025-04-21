import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "regenerator-runtime/runtime";
import "core-js/stable";
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

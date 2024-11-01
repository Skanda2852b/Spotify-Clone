import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PLayerContextProvider from './Context/playerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PLayerContextProvider>
        <App />
      </PLayerContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cotizador from './Cotizador.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Cotizador />
  // </StrictMode>,
)

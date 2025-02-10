import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cotizador from './Cotizador.jsx'
import { QuoteProvider } from './contexts/QuoteContext';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <QuoteProvider>
      <Cotizador />

    </QuoteProvider>
  // </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import QuotationForm from './Cotizador.jsx'
import { QuoteProvider } from './contexts/QuoteContext';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <QuoteProvider>
      <QuotationForm />

    </QuoteProvider>
  // </StrictMode>,
)

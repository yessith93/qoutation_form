import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import QuotationForm from './Cotizador.jsx'
import { QuoteProvider } from './contexts/QuoteContext';
import { StepProvider } from './contexts/StepContext';

createRoot(document.getElementById('root')).render(
    <QuoteProvider>
      <StepProvider>
        <QuotationForm />
      </StepProvider>
    </QuoteProvider>
)

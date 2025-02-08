import { useState } from 'react'
import Navigation_bar from './Componens/Navigation_bar'
import viteLogo from '/vite.svg'
import './css/styles.css'

function App() {
  const [currentStep, setCurrentStep] = useState(4); // Puedes cambiar el paso inicial

  return (
    <>
      <div className='main'>
        <div className="wizard-container">
          <Navigation_bar currentStep={currentStep} />
          <div className="button-container">
            <button onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}>
              Anterior
            </button>
            <button onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 4))}>
              Siguiente
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

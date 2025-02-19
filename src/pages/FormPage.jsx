import Navigation_bar from '../Components/Navigation_bar';
import { Step1, Step2, Step3, Step4 } from '../Components/steps'
import { useStep } from '../hooks';

//create the component
const FormPage = () => {
  const { step } = useStep();

  return (
    <>
        <header className="cont-tit">
            <h1 id="#contenido-ppal" className="tit">Cotizar</h1>
        </header>
        <Navigation_bar step={step} />
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
    </>
  );
};

export default FormPage;


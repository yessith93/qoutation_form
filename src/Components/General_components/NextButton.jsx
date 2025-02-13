import { useState,useEffect } from 'react';
import { useQuote } from '../../hooks/UseQuote';
const NextButton = ({ label = "Siguiente",disableNextButton =true }) => {
    const { handleNextStep } = useQuote();
    const [disabled, setDisabled] = useState(disableNextButton);
    useEffect(() => {
        setDisabled(disableNextButton);
      }, [disableNextButton]);
    return (
        <button className="btn-main" onClick={handleNextStep} disabled={disabled===true}> 
            {label}
        </button>
    );
};

export default NextButton;
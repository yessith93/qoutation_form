import { useQuote } from '../../hooks/UseQuote';
const NextButton = ({ label = "Siguiente",disableNextButton =true,alternativeNextFunction,isSubmit}) => {
    const { handleNextStep } = useQuote();
    const handleClick = () => {
        if(!isSubmit){
            alternativeNextFunction && alternativeNextFunction();
            handleNextStep();
        }
    }
    
    
    return (
        <button type={isSubmit?"submit":"button"} className="btn-main" onClick={handleClick} disabled={disableNextButton===true}>
            {label}
        </button>
    );
};

export default NextButton;
import { useStep } from '../../hooks';
const NextButton = ({ label = "Siguiente",disableNextButton =true,alternativeNextFunction,isSubmit}) => {
    const { handleNextStep } = useStep();
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
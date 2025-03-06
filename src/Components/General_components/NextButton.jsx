import { useStep } from '../../hooks';
const NextButton = ({ label = "Siguiente",disableNextButton =true,additionalFunction,isSubmit}) => {
    const { handleNextStep } = useStep();
    const handleClick = () => {
        if(!isSubmit){
            additionalFunction && additionalFunction();
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
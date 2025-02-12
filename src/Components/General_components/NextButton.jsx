import { useQuote } from '../../hooks/UseQuote';
const NextButton = ({ label = "Siguiente",validation }) => {
    const { handleNextStep } = useQuote();
    return (
        <button className="btn-main" onClick={handleNextStep}>
            {label}
        </button>
    );
};

export default NextButton;
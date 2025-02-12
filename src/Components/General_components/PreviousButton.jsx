import { useQuote } from '../../hooks/UseQuote';
const PreviousButton = ({ label ="Volver" }) => {
    const { handlePreviousStep } = useQuote();
    return (
        <button className="btn-sec cambiar-modelo" onClick={handlePreviousStep}>
            {label}
        </button>
    );
};

export default PreviousButton;
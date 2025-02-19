import { useStep } from '../../hooks';
const PreviousButton = ({ label ="Volver" }) => {
    const { handlePreviousStep } = useStep();
    return (
        <button className="btn-sec cambiar-modelo" onClick={handlePreviousStep}>
            {label}
        </button>
    );
};

export default PreviousButton;
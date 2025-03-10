import ModelCard from '../../General_components/model_card';
import { useQuote, useStep } from '../../../hooks';
const ModelCards = ({ models }) => {
    const { handleNextStep } = useStep();
    const { updateQuoteData } = useQuote();

    const handleClick = (model) => {
        updateQuoteData('model', model);
        updateQuoteData('version', {});
        handleNextStep();
    };
    return (
        <div className="tab-content active">
            <ul className="row" id="modelos-list">
                {models.map((model) => (
                    <li className="col xs-12 sm-6 lg-4" key = {model.id} onClick={()=>handleClick(model)}>
                        <ModelCard key={model.id} model={model} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ModelCards;
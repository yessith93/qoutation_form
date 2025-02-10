import ModelCard from './model_card';
const ModelCards = ({ models }) => {
    return (
        <div className="tab-content active">
            <ul className="row" id="modelos-list">
                {models.map((model) => (
                    <ModelCard key={model.id} model={model} />
                ))}
            </ul>
        </div>
    );
};
export default ModelCards;
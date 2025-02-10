import React from 'react';
import { useQuote } from '../../../hooks/UseQuote';

const ModelCard = ({ model }) => {
    const { modelo, img} = model;
    const { handleNextStep, updateQuoteData } = useQuote();
    const handleClick = () => {
        updateQuoteData('model', model);
        handleNextStep();
    };

    return (
        <li className="col xs-12 sm-6 lg-4" onClick={handleClick}>
            <article className="car-item">
                <a >
                    <figure className="img-wrap">
                        <img src={img} alt={modelo} />
                    </figure>
                    <div className="cont-subtit">
                        <h3 className="subtit">{modelo}</h3>
                        <img className="ic-arrow" src="/src/assets/ic_arrow_r.svg" alt="ic_arrow" />
                    </div>
                </a>
            </article>
        </li>
    );
};
export default ModelCard;
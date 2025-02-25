import React from 'react';
import { useQuote, useStep } from '../../../hooks';
import arrow from '/icons/ic_arrow_r.svg';

const ModelCard = ({ model }) => {
    const { name, img} = model;
    const { updateQuoteData } = useQuote();
    const { handleNextStep } = useStep();
    const handleClick = () => {
        updateQuoteData('model', model);
        updateQuoteData('version', {});
        handleNextStep();
    };

    return (
        <li className="col xs-12 sm-6 lg-4" onClick={handleClick}>
            <article className="car-item">
                <a >
                    <figure className="img-wrap">
                        <img src={img} alt={name} />
                    </figure>
                    <div className="cont-subtit">
                        <h3 className="subtit">{name}</h3>
                        <img className="ic-arrow" src={arrow} alt="ic_arrow" />
                    </div>
                </a>
            </article>
        </li>
    );
};
export default ModelCard;
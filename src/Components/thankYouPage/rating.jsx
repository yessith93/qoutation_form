import React, { useState } from 'react';
const Rating = () => {
    const [rating, setRating] = useState(0);
    const [feedbackStage, setFeedbackStage] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
        setFeedbackStage(1); // Move to the next feedback stage
    };

    const handleFeedbackSubmit = () => {
        // Here you would typically handle sending the feedback data
        // For this example, we'll just move to the final stage
        setFeedbackStage(2);
    };

    const handleCloseRating = () => {
        setFeedbackStage(0); // Close the rating section
    };

    return (
        <section className="calificacion" style={{ display: feedbackStage > 0 ? 'block' : 'none' }}>
            <a className="cerrar" title="cerrar" href="#" onClick={handleCloseRating}>
                <img alt="cerrar calificacion" src="/volvo/imag/v1/icon/cerrar.png" />
            </a>
            {feedbackStage === 0 && (
                <div className="paso-uno">
                    {/* ... (Star rating component - consider using a dedicated library) */}
                    <h3 className="titu">Evalúa tu experiencia simulando tu financiamiento con nosotros</h3>
                    <div className="star-rating">
                        {[5, 4, 3, 2, 1].map((value) => (
                            <label key={value} htmlFor={`star-${value}`} title={`${value} stars`} onClick={() => handleRatingChange(value)}>
                                <i className={`active fa fa-star ${rating >= value ? 'active' : ''}`} aria-hidden="true"></i>
                            </label>
                        ))}
                    </div>
                </div>
            )}
            {feedbackStage === 1 && (
                <div className="paso-dos">
                    <form id="feedback" onSubmit={handleFeedbackSubmit}> {/* Prevent default form submission */}
                        {/* ... (Hidden input fields remain the same) */}
                        <h3 className="titu">¿Cómo podemos mejorar nuestra experiencia de cotización?</h3>
                        <textarea className="form-control" id="textarea" name="article_feedback_comment" rows="6" placeholder="Escribe aquí tu comentario"></textarea>
                        <div className="cont-btn">
                            <button type="button" className="btn-main enviar_feedback" onClick={handleFeedbackSubmit}>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {feedbackStage === 2 && (
                <div className="paso-tres">
                    <figure className="img-wrap">
                        <img src="../../assets/icons/calificacion.svg" alt="" />
                    </figure>
                    <h3 className="titu">¡Gracias por tu feedback!</h3>
                </div>
            )}
        </section>
    );
};

export default Rating;

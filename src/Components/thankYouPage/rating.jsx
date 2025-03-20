import React, { useEffect, useState } from 'react';
const Rating = () => {
    const [rating, setRating] = useState(0);
    const [feedbackStage, setFeedbackStage] = useState(0);
    const [showModal, setShowModal] = useState(true);

    const handleRatingChange = (value) => {
        setRating(value);
        if (value < 5) {
            setFeedbackStage(1);
        } else {
            setFeedbackStage(2);
        }
    };

    const handleFeedbackSubmit = () => {
        // Here you would typically handle sending the feedback data
        // For this example, we'll just move to the final stage
        setFeedbackStage(2);
    };

    const handleCloseRating = () => {
        setShowModal(false);
    };
    const handlebackRating = () => {
        setFeedbackStage(0);
    };
    useEffect(() => {
        if (feedbackStage === 2) {
            setTimeout(() => {
                setShowModal(false);
            }, 2000);
        }
    }, [feedbackStage]);

    return (
        <section className="calificacion" style={{ display: showModal ? 'block' : 'none' }}>
            <div className="cont_btn">
                <button onClick={handlebackRating} style={{ display: feedbackStage === 1 ? 'block' : 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button className="cerrar" title="cerrar" href="#" onClick={handleCloseRating}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C2B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            {feedbackStage === 0 && (
                <div className="paso-uno">
                    {/* ... (Star rating component - consider using a dedicated library) */}
                    <h3 className="titu">Evalúa tu experiencia utilizando este componente de calificación</h3>
                    <div className="star-rating">
                        {[5, 4, 3, 2, 1].map((value) => (
                            <label key={value} htmlFor={`star-${value}`} title={`${value} stars`} onClick={() => handleRatingChange(value)}>
                                <i className={`active fa fa-star ${rating >= value ? 'active' : ''}`} aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="42" viewBox="0 0 44 42" fill="none">
                                        <path d="M22.8967 2.07654L27.9852 12.387C28.4222 13.2724 29.2669 13.8861 30.2441 14.0281L41.6223 15.6814C42.4425 15.8006 42.77 16.8086 42.1765 17.3871L33.9431 25.4127C33.2361 26.1019 32.9134 27.0949 33.0803 28.0681L35.024 39.4003C35.1641 40.2173 34.3067 40.8402 33.573 40.4545L23.396 35.1042C22.5221 34.6447 21.4779 34.6447 20.604 35.1042L10.427 40.4545C9.69334 40.8402 8.83591 40.2173 8.97602 39.4003L10.9197 28.0681C11.0866 27.0949 10.7639 26.1019 10.0569 25.4127L1.8235 17.3871C1.22998 16.8086 1.55749 15.8006 2.37771 15.6814L13.7559 14.0281C14.7331 13.8861 15.5778 13.2724 16.0148 12.387L21.1033 2.07654C21.4701 1.33329 22.5299 1.33329 22.8967 2.07654Z" stroke="#00A0DC" strokeWidth="2" />
                                    </svg>
                                </i>
                            </label>
                        ))}
                    </div>
                </div>
            )}
            {feedbackStage === 1 && (
                <div className="paso-dos">
                    <form id="feedback" onSubmit={handleFeedbackSubmit}> {/* Prevent default form submission */}
                        {/* ... (Hidden input fields remain the same) */}
                        <h3 className="titu">¿Cómo puedo mejorar la experiencia del componente?</h3>
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 96 96"
                            width="100%"
                            height="100%"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2" // Permite pasar props como `className`, `width`, `height`, etc.
                        >
                            <circle cx="48" cy="48" r="47.5" fill="rgb(0,160,220)" />
                            <g transform="matrix(1,0,0,1,22.0486,25.132)">
                                <path
                                    d="M54.124,1.877C55.389,3.188 55.351,5.276 54.04,6.541L19.84,39.527C18.562,40.76 16.538,40.76 15.26,39.527L1.96,26.699C0.649,25.434 0.611,23.346 1.876,22.035C3.141,20.724 5.229,20.686 6.54,21.951L17.55,32.57L49.46,1.792C50.771,0.528 52.859,0.565 54.124,1.877Z"
                                    fill="white"
                                />
                            </g>
                        </svg>
                    </figure>
                    <h3 className="titu">¡Gracias por tu feedback!</h3>
                </div>
            )}
        </section>
    );
};

export default Rating;

const RadioGroup = ({ label, name }) => {
    return (
        <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
                <h3 className="subtit">
                    <span className="bold">{label}</span> (opcional)
                </h3>
                <div className="radio-group">
                    <p>
                        <input type="radio" id={`radio-${name}-yes`} name={name} value="true" />
                        <label htmlFor={`radio-${name}-yes`}>Sí</label>
                    </p>
                    <p>
                        <input type="radio" id={`radio-${name}-no`} name={name} value="false" />
                        <label htmlFor={`radio-${name}-no`}>No</label>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RadioGroup;

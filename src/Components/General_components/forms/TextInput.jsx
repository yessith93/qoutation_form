const TextInput = ({ label, name, type = "text", required = false, minLength, maxLength, value, onChange, error  }) => {
    return (
        <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
                <input type={type} className="form-control" name={name} required={required} maxLength={maxLength} minLength={minLength} value={value} onChange={onChange} />
                <span className="bar"></span>
                <label className="form-label">{label}</label>
                {error && <p className="txt-error">{error}</p>}
            </div>
        </div>
    );
};

export default TextInput;

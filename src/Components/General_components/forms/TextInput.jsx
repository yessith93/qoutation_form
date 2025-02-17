const TextInput = ({ label, name, type = "text", required = false, minLength, maxLength  }) => {
    return (
        <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
                <input type={type} className="form-control" name={name} required={required} maxLength={maxLength} minLength={minLength} />
                <span className="bar"></span>
                <label className="form-label">{label}</label>
            </div>
        </div>
    );
};

export default TextInput;

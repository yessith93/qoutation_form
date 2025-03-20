const CheckboxWithMessage = ({ id, message, onChange, checked, name, error }) => {
    return (
      <div className="cont-checkbox">
        <div className="msj-checkbox">
          <input type="checkbox" id={id} onChange={onChange} checked={checked} name={name}/>
          <label htmlFor={id}>
            <p className="legal">{message}</p>
          </label>
        </div>
        {error && <p className="txt-error">{error}</p>}
      </div>
    );
  };
  
  export default CheckboxWithMessage;
  
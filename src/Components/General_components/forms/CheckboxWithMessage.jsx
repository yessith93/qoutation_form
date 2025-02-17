const CheckboxWithMessage = ({ id, message }) => {
    return (
      <div className="cont-checkbox">
        <div className="msj-checkbox">
          <input type="checkbox" id={id} />
          <label htmlFor={id}></label>
          <p className="legal">{message}</p>
        </div>
      </div>
    );
  };
  
  export default CheckboxWithMessage;
  
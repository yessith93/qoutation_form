const ErrorMessage = ({ message, onRetry }) => {
    return (
      <div className="error">
        {message}
        {onRetry && (
          <button className="btn-sec cambiar-modelo" onClick={onRetry}>
            Volver
          </button>
        )}
      </div>
    );
  };
  
  export default ErrorMessage;
  
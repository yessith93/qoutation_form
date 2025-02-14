const StepHeader = ({ step, title, subtitle }) => {
    return (
      <header className={`cont-tit step${step} step-header`}>
        <h2 className="titu">
          <strong>{title}</strong>
          {subtitle && <br />}
          {subtitle}
        </h2>
      </header>
    );
  };

  export default StepHeader;
  
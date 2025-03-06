import PreviousButton from '../General_components/PreviousButton';
import NextButton from '../General_components/NextButton';
const ContainerBtn = ({disableNextButton,nextLabel,additionalFunction,isSubmit}) => {
    return (
      <div className="cont-btn">
        <NextButton disableNextButton={disableNextButton} label={nextLabel} additionalFunction={additionalFunction} isSubmit={isSubmit} />
        <PreviousButton />
      </div>
    );
  };
  
  export default ContainerBtn;
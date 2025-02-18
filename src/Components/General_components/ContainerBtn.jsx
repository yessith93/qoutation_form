import PreviousButton from '../General_components/PreviousButton';
import NextButton from '../General_components/NextButton';
const ContainerBtn = ({disableNextButton,nextLabel,aditionalFunction,isSubmit}) => {
    return (
      <div className="cont-btn">
        <NextButton disableNextButton={disableNextButton} label={nextLabel} aditionalFunction={aditionalFunction} isSubmit={isSubmit} />
        <PreviousButton />
      </div>
    );
  };
  
  export default ContainerBtn;
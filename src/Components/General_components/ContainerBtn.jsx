import PreviousButton from '../General_components/PreviousButton';
import NextButton from '../General_components/NextButton';
const ContainerBtn = ({disableNextButton,nextLabel}) => {
    return (
      <div className="cont-btn">
        <NextButton disableNextButton={disableNextButton} label={nextLabel} />
        <PreviousButton />
      </div>
    );
  };
  
  export default ContainerBtn;
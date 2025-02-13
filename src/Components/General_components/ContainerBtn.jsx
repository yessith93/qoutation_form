import PreviousButton from '../General_components/PreviousButton';
import NextButton from '../General_components/NextButton';
const ContainerBtn = ({disableNextButton}) => {
    return (
      <div className="cont-btn">
        <NextButton disableNextButton={disableNextButton} />
        <PreviousButton />
      </div>
    );
  };
  
  export default ContainerBtn;
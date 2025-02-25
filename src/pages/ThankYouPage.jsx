import Rating from '../Components/thankYouPage/rating';
import Headers from '../Components/thankYouPage/headers';
import DropdownMobile from '../Components/thankYouPage/DropdownMobile';
import { useQuote } from '../hooks';
import ModelCard from '../Components/thankYouPage/ModelCard';
import Info from '../Components/thankYouPage/info';

const thankYouPage = () => {
  const { quoteData } = useQuote();
  const { model, version, userInfo } = quoteData;

  const userInformation = [
    { label: 'Nombre completo', value: `${userInfo.nombre} ${userInfo.primer_apellido}` },
    { label: 'RUT', value: userInfo.rut },
    { label: 'Email', value: userInfo.email },
    { label: 'Teléfono', value: userInfo.telefono },
  ];
  const additionalInfo = [
    { label: 'Necesito financiamiento para adquirir este auto', value: userInfo.financiamiento ? 'Sí' : 'No' },
    { label: 'Usaré mi auto actual en parte de pago', value: userInfo.auto_parte_pago ? 'Sí' : 'No' },
    { label: 'Quisiera participar de un Test Drive de este vehículo', value: userInfo.test_drive ? 'Sí' : 'No' },
  ];

  return (
    <>
      <Headers />
      <div className="wrapper">
        <h2 className="tit">Resumen de cotización</h2>
        <article className="car-item car-resume">
          <ModelCard model={model} version={version} />
          <Info userInformation={userInformation} additionalInfo={additionalInfo} />
          <DropdownMobile userInfo={userInformation} additionalInfo={additionalInfo} />
        </article>
        <Rating />
      </div>
    </>
  );
};

export default thankYouPage;

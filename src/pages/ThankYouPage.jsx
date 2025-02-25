import { useQuote } from '../hooks';
import { ModelCard, Info, Headers, DropdownMobile, Rating } from '../Components/thankYouPage';

const getUserInfo = (userInfo) => [
  { label: 'Nombre completo', value: `${userInfo?.nombre || ''} ${userInfo?.primer_apellido || ''}`.trim() },
  { label: 'RUT', value: userInfo?.rut || 'No especificado' },
  { label: 'Email', value: userInfo?.email || 'No especificado' },
  { label: 'Teléfono', value: userInfo?.telefono || 'No especificado' },
];

const getAdditionalInfo = (userInfo) => [
  { label: 'Necesito financiamiento para adquirir este auto', value: userInfo?.financiamiento ? 'Sí' : 'No' },
  { label: 'Usaré mi auto actual en parte de pago', value: userInfo?.auto_parte_pago ? 'Sí' : 'No' },
  { label: 'Quisiera participar de un Test Drive de este vehículo', value: userInfo?.test_drive ? 'Sí' : 'No' },
];


const ThankYouPage = () => {
  const { quoteData } = useQuote();
  const { model = {}, version = {}, userInfo = {} } = quoteData || {};

  const userInformation = getUserInfo(userInfo);
  const additionalInfo = getAdditionalInfo(userInfo);

  return (
    <>
      <Headers />
      <div className="wrapper">
        <h2 className="tit">Resumen de cotización</h2>
        <article className="car-item car-resume">
          <ModelCard model={model} version={version} />
          <Info userInformation={userInformation} additionalInfo={additionalInfo} />
          <DropdownMobile userInformation={userInformation} additionalInfo={additionalInfo} />
        </article>
        <Rating />
      </div>
    </>
  );
};

export default ThankYouPage;

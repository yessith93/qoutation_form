import Rating from '../Components/thankYouPage/rating';
import Headers from '../Components/thankYouPage/headers';
import InfoList from '../Components/thankYouPage/InfoList';
import DropdownMobile from '../Components/thankYouPage/DropdownMobile';
import {useQuote} from '../hooks';

const thankYouPage = () => {
  const {quoteData} = useQuote();
  const {model, version, userInfo} = quoteData;
  console.log(model)
  //use usememo for userInformation and additionalInfo
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
      <Headers/>

      <div className="wrapper">
        <h2 className="tit">Resumen de cotización</h2>
        <article className="car-item car-resume">
          <figure className="img-wrap">
            <img src={model.img} alt={model.name} />
            <h3 className="car-txt">{model.name}</h3>
            <h3 className="car-txt">{version.name}</h3>
          </figure>
          <div className="cont-info">
            <div className="subtit only-desktop">Revisa tus datos <img src="/src/assets/icons/ic_arrow_r.svg" alt="" /></div>

            <div className="row-info only-desktop">
              <InfoList items={userInformation} />
              <InfoList items={additionalInfo} />
            </div>
          </div>
          <DropdownMobile userInfo={userInformation} additionalInfo={additionalInfo} />
        </article>
        <Rating />
      </div>
    </>
  );
};

export default thankYouPage;

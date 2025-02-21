import { useState } from 'react';
import Rating from '../Components/thankYouPage/rating';
import Headers from '../Components/thankYouPage/headers';
import InfoList from '../Components/thankYouPage/InfoList';
import DropdownMobile from '../Components/thankYouPage/DropdownMobile';
import {useQuote} from '../hooks';

const thankYouPage = () => {
  const {quoteData} = useQuote();
  const {model, version, userInfo} = quoteData;
  
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
            <img src="/volvo/site/artic/20241204/imag/foto_0000034420241204140409__COTIZADOR_480x194.png" alt="" />
            <h3 className="car-txt">XC60 Polestar</h3>
            <h3 className="car-txt">XC60 T8 Polestar Engineered</h3>
            <div className="car-price" style={{ display: 'none' }}>
              <p className="title"></p>
              <p className="number">$74.900.000</p>
            </div>
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

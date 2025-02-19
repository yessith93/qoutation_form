import React from 'react';

const thankYouPage = () => {
  return (
    <>
      <header className="cont-tit">
        <h1 id="contenido-ppal" className="tit">Cotizador</h1>
      </header>

      <header className="cont-tit">
        <h2 className="titu tit-semi">Gracias prueba prueba!</h2>
        <p className="baj">Recibirás toda la información que necesitas dentro de las próximas 72 horas.</p>
      </header>

      <div className="cont-btn dos"></div>

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
            <div className="subtit only-desktop">Revisa tus datos <img src="/volvo/imag/v1/icon/ic_arrow_r.svg" alt="" /></div>

            <div className="row-info only-desktop">
              <ul className="info-list">
                <li>
                  <p className="pref">Nombre completo</p>
                  <p className="txt nombre">prueba prueba</p>
                </li>
                <li>
                  <p className="pref">RUT</p>
                  <p className="txt identificador">12345671-8</p>
                </li>
                <li>
                  <p className="pref">Email</p>
                  <p className="txt email">24migyess24@gmail.com</p>
                </li>
                <li>
                  <p className="pref">Teléfono</p>
                  <p className="txt telefono">12345678</p>
                </li>
              </ul>
              <ul className="answer-list">
                <li>
                  <p className="pref">Quisiera ser contactado a través de</p>
                  <p className="txt contacto"></p>
                </li>
                <li>
                  <p className="pref">Necesito financiamiento para adquirir este auto</p>
                  <p className="txt financiamiento">No</p>
                </li>
                <li>
                  <p className="pref">Usaré mi auto actual en parte de pago</p>
                  <p className="txt auto_parte_pago">No</p>
                </li>
                <li>
                  <p className="pref">Quisiera participar de un Test Drive de este vehículo</p>
                  <p className="txt test_drive">No</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown-container only-mobile">
            <div className="enc-select">
              <div className="btn-dropdown">Ver detalle <img src="/volvo/imag/v1/icon/ic_arrow_r.svg" alt="" /></div>
            </div>
            <div className="list-select">
              <div className="article-inner">
                <div className="row-info">
                  <ul className="info-list">
                    <li>
                      <p className="pref">Nombre completo</p>
                      <p className="txt nombre">prueba prueba</p>
                    </li>
                    <li>
                      <p className="pref">RUT</p>
                      <p className="txt identificador">12345671-8</p>
                    </li>
                    <li>
                      <p className="pref">Email</p>
                      <p className="txt email">24migyess24@gmail.com</p>
                    </li>
                    <li>
                      <p className="pref">Teléfono</p>
                      <p className="txt telefono">12345678</p>
                    </li>
                  </ul>
                  <ul className="answer-list">
                    <li>
                      <p className="pref">Quisiera ser contactado a través de</p>
                      <p className="txt contacto"></p>
                    </li>
                    <li>
                      <p className="pref">Necesito financiamiento para adquirir este auto</p>
                      <p className="txt financiamiento">No</p>
                    </li>
                    <li>
                      <p className="pref">Usaré mi auto actual en parte de pago</p>
                      <p className="txt auto_parte_pago">No</p>
                    </li>
                    <li>
                      <p className="pref">Quisiera participar de un Test Drive de este vehículo</p>
                      <p className="txt test_drive">No</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="calificacion" style={{ display: 'none' }}>
          <a className="cerrar" title="cerrar" href="#" onClick={() => cerrarCalificacion('calificacion')}>
            <img alt="cerrar calificacion" src="/volvo/imag/v1/icon/cerrar.png" />
          </a>
          <div className="paso-uno">
            <h3 className="titu">Evalúa tu experiencia simulando tu financiamiento con nosotros</h3>
            <div className="star-rating">
              <input id="star-5" type="radio" name="rating" value="5/5" />
              <label htmlFor="star-5" title="5 stars">
                <i className="active fa fa-star" aria-hidden="true"></i>
              </label>
              <input id="star-4" type="radio" name="rating" value="4/5" />
              <label htmlFor="star-4" title="4 stars">
                <i className="active fa fa-star" aria-hidden="true"></i>
              </label>
              <input id="star-3" type="radio" name="rating" value="3/5" />
              <label htmlFor="star-3" title="3 stars">
                <i className="active fa fa-star" aria-hidden="true"></i>
              </label>
              <input id="star-2" type="radio" name="rating" value="2/5" />
              <label htmlFor="star-2" title="2 stars">
                <i className="active fa fa-star" aria-hidden="true"></i>
              </label>
              <input id="star-1" type="radio" name="rating" value="1/5" />
              <label htmlFor="star-1" title="1 star">
                <i className="active fa fa-star" aria-hidden="true"></i>
              </label>
            </div>
          </div>
          <div className="paso-dos" style={{ display: 'none' }}>
            <form id="feedback" action="/cgi-bin/prontus_form.cgi" method="post" encType="multipart/form-data">
              <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" value="" />
              <input type="hidden" name="g-recaptcha-action" id="g-recaptcha-action" value="" />
              <input type="hidden" name="_ts" value="20211102131243" />
              <input type="hidden" name="_file" value="/volvo/site/artic/20211102/pags/20211102131243.html" />
              <input type="hidden" name="_prontus_id" value="volvo" />
              <input type="hidden" name="pagina" value="cotizador" />
              <input type="hidden" name="respuesta" value="" />
              <h3 className="titu">¿Cómo podemos mejorar nuestra experiencia de cotización?</h3>
              <textarea className="form-control" id="textarea" name="article_feedback_comment" rows="6" placeholder="Escribe aquí tu comentario"></textarea>
              <div className="cont-btn">
                <button type="button" className="btn-main enviar_feedback">Enviar</button>
              </div>
            </form>
          </div>
          <div className="paso-tres" style={{ display: 'none' }}>
            <figure className="img-wrap">
              <img src="/volvo/imag/v1/icon/calificacion.svg" alt="" />
            </figure>
            <h3 className="titu">¡Gracias por tu feedback!</h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default thankYouPage;

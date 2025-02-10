
const Step4 = ({ onPrevious }) => {
    return (
      <div className="div-step step4">
        <header className="cont-tit step4 step-header">
          <h2 className="titu">
            <strong>Ingresa tus datos y elige tus preferencias de contacto</strong>
          </h2>
        </header>
        <div className="row">
          <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
              <input type="text" className="form-control" name="nombre" required />
              <span className="bar"></span>
              <label className="form-label">Nombre</label>
            </div>
          </div>
          <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
              <input type="text" className="form-control" name="primer_apellido" required />
              <span className="bar"></span>
              <label className="form-label">Apellidos</label>
            </div>
          </div>
          <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
              <input type="text" className="form-control" name="rut" minLength="8" maxLength="11" required />
              <span className="bar"></span>
              <label className="form-label">RUT</label>
            </div>
          </div>
          <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
              <input type="text" className="form-control" name="email" required />
              <span className="bar"></span>
              <label className="form-label">Email de Contacto</label>
            </div>
          </div>
          <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
              <input type="text" className="form-control" name="telefono" maxLength="9" required />
              <span className="bar"></span>
              <label className="form-label">Número de teléfono</label>
            </div>
          </div>
          <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
              <h3 className="subtit">
                <span className="bold">Necesito financiamiento para adquirir este auto</span> (opcional)
              </h3>
              <div className="radio-group">
                <p>
                  <input type="radio" id="radio1" name="financiamiento" value="true" />
                  <label htmlFor="radio1">Si</label>
                </p>
                <p>
                  <input type="radio" id="radio2" name="financiamiento" value="false" />
                  <label htmlFor="radio2">No</label>
                </p>
              </div>
            </div>
          </div>
          <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
              <h3 className="subtit">
                <span className="bold">Usaré mi auto actual en parte de pago</span> (opcional)
              </h3>
              <div className="radio-group">
                <p>
                  <input type="radio" id="radio3" name="auto_parte_pago" value="true" />
                  <label htmlFor="radio3">Si</label>
                </p>
                <p>
                  <input type="radio" id="radio4" name="auto_parte_pago" value="false" />
                  <label htmlFor="radio4">No</label>
                </p>
              </div>
            </div>
          </div>
          <div className="col xs-12 sm-12 md-6 lg-6">
            <div className="form-group">
              <h3 className="subtit">
                <span className="bold">Quisiera participar de un Test Drive de este vehículo</span> (opcional)
              </h3>
              <div className="radio-group">
                <p>
                  <input type="radio" id="radio5" name="test_drive" value="true" />
                  <label htmlFor="radio5">Si</label>
                </p>
                <p>
                  <input type="radio" id="radio6" name="test_drive" value="false" />
                  <label htmlFor="radio6">No</label>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separa"></div>
        <div className="cont-checkbox">
          <div className="msj-checkbox">
            <input type="checkbox" id="checbkox-legal-1" />
            <label htmlFor="checbkox-legal-1"></label>
            <p className="legal">
              El Cliente autoriza a Sociedad Comercializadora Ditec Automoviles S.A. a compartir su información con empresas asociadas y filiales tanto nacionales como extranjeras, y a contactarlo para enviarle información relevante y/o preguntarle su opinión por la forma en que fueron prestados los servicios. El Cliente declara que ha sido informado acerca del propósito del almacenamiento de sus datos personales y autoriza su tratamiento de conformidad lo regula la ley 19.628 de protección de datos de carácter personal y a su Política de Privacidad y Protección de Datos Personales.
            </p>
          </div>
        </div>
        <div className="cont-btn">
          <button className="btn-main" id="finalizar">Enviar</button>
          <button className="btn-sec" id="cambiar-lugar" onClick={onPrevious}>Volver</button>
        </div>
      </div>
    );
  };

  export default Step4;
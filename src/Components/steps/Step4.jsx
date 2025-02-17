import ContainerBtn from '../General_components/ContainerBtn';
import StepHeader from '../General_components/StepHeader';
import TextInput from '../General_components/forms/TextInput';
import CheckboxWithMessage from '../General_components/forms/CheckboxWithMessage';
import RadioGroup from '../General_components/forms/RadioGroup';

const formConditions = "El Cliente autoriza a Sociedad Comercializadora Ditec Automoviles S.A. a compartir su información con empresas asociadas y filiales tanto nacionales como extranjeras, y a contactarlo para enviarle información relevante y/o preguntarle su opinión por la forma en que fueron prestados los servicios. El Cliente declara que ha sido informado acerca del propósito del almacenamiento de sus datos personales y autoriza su tratamiento de conformidad lo regula la ley 19.628 de protección de datos de carácter personal y a su Política de Privacidad y Protección de Datos Personales.";
const Step4 = () => {
  return (
    <div className="div-step step4">
      <StepHeader step={4} title="Ingresa tus datos y elige tus preferencias de contacto" />
      <div className="row">
        <TextInput label="Nombre" name="nombre" required />
        <TextInput label="Apellidos" name="primer_apellido" required />
        <TextInput label="RUT" name="rut" required maxLength="11" minLength="8" />
        <TextInput label="Email de Contacto" name="email" required />
        <TextInput label="Número de teléfono" name="telefono" required maxLength="9" />
        <RadioGroup label="Necesito financiamiento para adquirir este auto" name="financiamiento" />
        <RadioGroup label="Usaré mi auto actual en parte de pago" name="auto_parte_pago" />
        <RadioGroup label="Quisiera participar de un Test Drive de este vehículo" name="test_drive" />
      </div>
      <div className="separa"></div>
      <CheckboxWithMessage id="checbkox-legal-1" message={formConditions}/>
      <ContainerBtn disableNextButton={true} nextLabel="Enviar." />
    </div>
  );
};

export default Step4;
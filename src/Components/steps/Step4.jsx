import { useState, useEffect, useRef } from 'react';
import ContainerBtn from '../General_components/ContainerBtn';
import StepHeader from '../General_components/StepHeader';
import TextInput from '../General_components/forms/TextInput';
import CheckboxWithMessage from '../General_components/forms/CheckboxWithMessage';
import RadioGroup from '../General_components/forms/RadioGroup';
import { useQuote } from '../../hooks';

const formConditions = "El Cliente autoriza a Sociedad Comercializadora Ditec Automoviles S.A. a compartir su información con empresas asociadas y filiales tanto nacionales como extranjeras, y a contactarlo para enviarle información relevante y/o preguntarle su opinión por la forma en que fueron prestados los servicios. El Cliente declara que ha sido informado acerca del propósito del almacenamiento de sus datos personales y autoriza su tratamiento de conformidad lo regula la ley 19.628 de protección de datos de carácter personal y a su Política de Privacidad y Protección de Datos Personales.";

const Step4 = () => {
  const {updateQuoteData,setFormSubmitted} = useQuote();
  const [formData, setFormData] = useState({
    nombre: '',
    primer_apellido: '',
    rut: '',
    email: '',
    telefono: '',
    financiamiento: '',
    auto_parte_pago: '',
    test_drive: '',
    termsAccepted: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "nombre":
        if (!value.trim()) error = "El nombre es obligatorio.";
        break;
      case "primer_apellido":
        if (!value.trim()) error = "El apellido es obligatorio.";
        break;
      case "rut":
        if (!/^[0-9]+-[0-9kK]$/.test(value)) error = "El RUT no es válido.";
        break;
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value)) error = "El correo no es válido.";
        break;
      case "telefono":
        if (!/^\d{9}$/.test(value)) error = "El teléfono debe tener 9 dígitos.";
        break;
      case "termsAccepted":
        if (!value) error = "Debes aceptar los términos.";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
    validateField(name, fieldValue);
  };

  const isFormValid = Object.values(errors).every((error) => error === "") &&
    Object.keys(formData).every(key => {
      if (['financiamiento', 'auto_parte_pago', 'test_drive'].includes(key)) {
        return true;
      }
      return formData[key] !== "";
    });

  const simulateApiCall = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Datos enviados a la API:", data);
        resolve("Datos enviados exitosamente");
      }, 1000);
    });
  };
  const HandleSubmit = async(e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.primer_apellido.trim()) newErrors.primer_apellido = "El apellido es obligatorio.";
    if (!/^[0-9]+-[0-9kK]$/.test(formData.rut)) newErrors.rut = "El RUT no es válido.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "El correo no es válido.";
    if (!/^\d{9}$/.test(formData.telefono)) newErrors.telefono = "El teléfono debe tener 9 dígitos.";
    if (!formData.termsAccepted) newErrors.termsAccepted = "Debes aceptar los términos.";

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await simulateApiCall(formData);
        updateQuoteData('userInfo', formData);
        setFormSubmitted(true);
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    };
  }

  return (
    <form onSubmit={HandleSubmit} className="div-step step4">
      <StepHeader step={4} title="Ingresa tus datos y elige tus preferencias de contacto" />
      <div className="row">
        <TextInput label="Nombre" name="nombre" value={formData.nombre} required={true} onChange={handleInputChange} error={errors.nombre} />
        <TextInput label="Apellidos" name="primer_apellido" value={formData.primer_apellido} required={true} onChange={handleInputChange} error={errors.primer_apellido} />
        <TextInput label="RUT" name="rut" maxLength="11" minLength="8" value={formData.rut} required={true} onChange={handleInputChange} error={errors.rut} />
        <TextInput label="Email de Contacto" name="email" value={formData.email} required={true} onChange={handleInputChange} error={errors.email} />
        <TextInput label="Número de teléfono" name="telefono" maxLength="9" value={formData.telefono} required={true} onChange={handleInputChange} error={errors.telefono} />
        <RadioGroup label="Necesito financiamiento para adquirir este auto" name="financiamiento" value={formData.financiamiento} onChange={handleInputChange} />
        <RadioGroup label="Usaré mi auto actual en parte de pago" name="auto_parte_pago" value={formData.auto_parte_pago} onChange={handleInputChange} />
        <RadioGroup label="Quisiera participar de un Test Drive de este vehículo" name="test_drive" value={formData.test_drive} onChange={handleInputChange} />
      </div>
      <div className="separa"></div>
      <CheckboxWithMessage id="checbkox-legal-1" message={formConditions} name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} error={errors.termsAccepted} />
      <ContainerBtn disableNextButton={false} nextLabel={isSubmitting ? "Enviando..." : (isFormValid ? "Enviar" : "Revisa los campos obligatorios")} aditionalFunction={HandleSubmit} isSubmit={true} />
    </form>
  );
};

export default Step4;
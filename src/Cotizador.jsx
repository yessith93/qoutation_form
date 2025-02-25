import './assets/css/quotation/tasacion.css'
import './assets/css/quotation/gridpak.css'
import './assets/css/quotation/reset.css'
import './assets/css/quotation/global.css'
import FormPage from './pages/FormPage';
import { useQuote } from './hooks';
import ThankYouPage from './pages/ThankYouPage';

const QuotationForm = () => {
  const { formSubmitted } = useQuote();
  return (
    <section className="cont-form">
      <div className="auxi">
        {
          formSubmitted ? <ThankYouPage /> : <FormPage />
        }
      </div>
    </section>
  );
};


export default QuotationForm;
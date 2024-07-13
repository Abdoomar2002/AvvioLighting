import Addresses from "./Addresses";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="container" id="cont">
      <div className="row row-cols-1 row-cols-lg-2 row-cols-sm-1 row-cols-md-3 g-4">
        <ContactForm />
        <br />
        <br />
        <Addresses />
      </div>
    </div>
  );
}
export default Contact;

import Navbar from "../components/NavBar";
import Consts from "../components/Consts";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Contact from "../components/Contact";

function ContactUs() {
  return (
    <section>
      <Navbar active="Contact Us" />

      <br />
      <div className="container">
        <h1
          className="first"
          style={{ marginTop: "100px", marginLeft: "-10px" }}
        >
          Contact Us
        </h1>
      </div>
    
      <Contact />
      <br />
      <br />
      <br />
      <Footer active="Contact Us" />
    </section>
  );
}
export default ContactUs;

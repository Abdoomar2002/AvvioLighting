import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function About() {
  return (
    <section>
      <NavBar active="About" />
      <br />
      <Container>
        <h1 className=" first" style={{ marginTop: "100px" }}>
          {" "}
          About Us
        </h1>
        <br />

        <p
          className="lead"
          style={{ fontSize: "1.2rem", fontWeight: "600", lineHeight: "2" }}
        >
          AVVIO is a Hungarian company specializing in the creation, production,
          and promotion of integrated lighting solutions for professional and
          commercial applications.
          <br />
          AVVIO is a company that was founded in 2018 with the strong conviction
          of bringing new values to the international lighting market.
        </p>
      </Container>
      <Container style={{ width: "70%" }}>
        <br />
        <br />
        <br />
        <div className="row">
          <div
            className="col-md-7 order-md-2   align-items-center"
            style={{ flexWrap: "wrap" }}
          >
            <h2 className="featurette-heading fw-normal lh-1"> Mission</h2>
            <p className="lead d-flex align-items-center justify-content-center">
              Our primary efforts focus on designing, manufacturing, and
              promoting a range of luminaires and integrated lighting systems in
              the global lighting market. Additionally, we remain engaged in
              advancing LED technology through innovation and the latest
              developments.
            </p>
          </div>
          <div className="col-md-5 order-md-1 d-flex align-items-center justify-content-start">
            <img
              src="/imgs/shooting.png"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div
            className="col-md-7   align-items-center"
            style={{ flexWrap: "wrap" }}
          >
            <h2 className="featurette-heading fw-normal lh-1"> Vision</h2>
            <p className="lead d-flex align-items-center justify-content-start">
              Our emphasis is on achieving success through inventive
              applications and effective business growth. We aspire to become a
              valued solution provider for customers, aiding them in enhancing
              their market shares and increasing turnovers
            </p>
          </div>
          <div className="col-md-5   d-flex align-items-center justify-content-end">
            <img
              src="/imgs/vision.png"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div
            className="col-md-7 order-md-2   align-items-center"
            style={{ flexWrap: "wrap" }}
          >
            <h2 className="featurette-heading fw-normal lh-1"> Values</h2>
            <p className="lead d-flex align-items-center justify-content-start">
              Integrity, Innovation, Quality and Sustainability
            </p>
          </div>
          <div className="col-md-5 order-md-1 d-flex align-items-center justify-content-start">
            <img
              src="/imgs/value.png"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>

      <Footer active="About" />
    </section>
  );
}
export default About;

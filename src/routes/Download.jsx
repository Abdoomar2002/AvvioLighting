import { Container, Collapse, Button, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Email from "../components/Email";

function Download() {
  const text = [
    "To access the Avvio Lighting Company Certificate, please provide your email address and full name below. We'll send you a download link shortly after.",
    "To download the document, please provide your email address and full name below. We'll send you a download link shortly after.",
    "To access the catalog, please provide your email address, full name, and select your country from the list below. We'll send you a download link shortly after. ",
  ];
  const [item, setItem] = useState("");
  const [type, setType] = useState();
  const [file, setFile] = useState("");
  const [open, setOpen] = useState(false);
  const [comapany, setCompany] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [general, setGeneral] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("Company Certificate");
  let arr = ["Company Certificate", "General Documents", "Catalogs"];
  useEffect(() => {
    axios
      .get(
        "https://avvio-website-w5pw.onrender.com/api/v1/download/Download/Catalog"
      )
      .then((res) => {
        console.log(res.data);
        let response = Object.keys(res.data).includes("files")
          ? res.data.files
          : null;
        setCatalog(response);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
    axios
      .get(
        "https://avvio-website-w5pw.onrender.com/api/v1/download/Download/Company Certificate"
      )
      .then((res) => {
        console.log(res.data);
        let response = Object.keys(res.data).includes("files")
          ? res.data.files
          : null;
        setCompany(response);

        setLoading(false);
      })
      .catch((err) => console.log(err.message));
    axios
      .get(
        "https://avvio-website-w5pw.onrender.com/api/v1/download/Download/General Documents"
      )
      .then((res) => {
        console.log(res.data);
        let response = Object.keys(res.data).includes("files")
          ? res.data.files
          : null;
        setGeneral(response);

        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  function handleActive(index) {
    setActive(index);
  }
  function toggleCollapse(e) {
    setOpen(!open);
  }
  function handleClick(e, file) {
    if (e == "company") {
      setItem(text[0]);
      setType(3);
      setFile(file);
    } else if (e == "general") {
      setItem(text[1]);
      setType(4);
      setFile(file);
    } else if (e == "catalog") {
      setItem(text[2]);
      setType(5);
      setFile("");
    }

    const popup = document.getElementById("popup1");

    popup.style.visibility = "visible";
    popup.style.opacity = "1";
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section id="Model">
          <NavBar active="Download" />
          <br />
          <Email
            Model={"props.Model"}
            text={item}
            type={type}
            dataSheet={file}
          />
          <Container>
            <h1 className="first" style={{ marginTop: "100px" }}>
              Download
            </h1>
            <br />
            {arr && (
              <>
                <Button variant="outline-dark" onClick={toggleCollapse}>
                  <h4 style={{ marginBottom: 0 }}>
                    Download List <img src="/static/arrow-left.svg" alt=".." />
                  </h4>
                </Button>
                <Collapse in={open} className="abc">
                  <div>
                    <br />
                    <table width={"100%"}>
                      <tbody>
                        {arr.length != 0 &&
                          arr.map((e, index) => {
                            return (
                              <tr key={index}>
                                <td style={{ padding: "25px 0" }}>
                                  <h6
                                    style={{ cursor: "pointer" }}
                                    onClick={(elem) => {
                                      handleActive(e);
                                    }}
                                  >
                                    {e}
                                  </h6>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </Collapse>
              </>
            )}

            <br />
            <br />

            <Row>
              {arr &&
                arr.map((e, index) => {
                  return (
                    <Col key={index}>
                      <h2
                        id={index}
                        className={e != active && "unselected"}
                        style={{ cursor: "pointer" }}
                        onClick={(elem) => {
                          handleActive(e);
                        }}
                      >
                        {e}
                      </h2>
                    </Col>
                  );
                })}
            </Row>
            {comapany ? (
              <section>
                <br />
                <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
                  {comapany.map((e, index) => {
                    if ("Company Certificate" != active) return;
                    return (
                      <div className="col" key={index}>
                        <a
                          id="company"
                          href="#popup1"
                          onClick={(elem) => handleClick("company", e)}
                          className="download-image"
                        >
                          <div className="card h-100 down " id="company">
                            <div className="image-container" id="company">
                              <img
                                id="company"
                                src="/imgs/ico-pdf.png"
                                alt=".."
                                className="image w-75 h-75"
                              />
                              <span
                                className="download-icon"
                                id="company"
                              ></span>
                            </div>
                            <center style={{ marginLeft: "-22.5%" }}>
                              <p id="company">{e.split("Certificate/")[1]}</p>
                            </center>
                          </div>
                        </a>
                      </div>
                    );
                  })}{" "}
                </div>
                <br />
                <br />
                <br />
              </section>
            ) : (
              active == "Company Certificate" && (
                <center>
                  <h2>No Documents yet</h2>
                </center>
              )
            )}
            {active === "Catalogs" && (
              <section>
                <br />
                <center className="h-50 d-flex align-items-center justify-content-center">
                  <a
                    href="#popup1"
                    id="catalog"
                    onClick={(elem) => handleClick("catalog", null)}
                    style={{ fontSize: "1.5rem" }}
                    className="btn btn-danger"
                  >
                    Request{" "}
                  </a>
                </center>
                {/* <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
                  {catalog.map((e, index) => {
                    if ("Catalogs" != active) return;
                    return (
                      <div className="col" key={index}>
                        <a
                          id="catalog"
                          href="#popup1"
                          onClick={(elem) => handleClick("catalog", e)}
                          className="download-image"
                        >
                          <div className="card h-100 down ">
                            <div className="image-container">
                              <img
                                src="/imgs/ico-pdf.png"
                                alt=".."
                                className="image w-75 h-75"
                              />
                              <span className="download-icon"></span>
                            </div>
                            <center style={{ marginLeft: "-22.5%" }}>
                              <p>{e.slice(25)}</p>
                            </center>
                          </div>
                        </a>
                      </div>
                    );
                  })}{" "}
                </div>*/}
                <br />
                <br />
                <br />
              </section>
            )}
            {general ? (
              <section>
                <br />
                <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
                  {general.map((e, index) => {
                    if ("General Documents" != active) return;
                    return (
                      <div className="col" key={index}>
                        <a
                          id="general"
                          href="#popup1"
                          onClick={(elem) => handleClick("general", e)}
                          className="download-image"
                        >
                          <div className="card h-100 down ">
                            <div className="image-container">
                              <img
                                src="/imgs/ico-pdf.png"
                                alt=".."
                                className="image w-75 h-75"
                              />
                              <span className="download-icon"></span>
                            </div>
                            <center style={{ marginLeft: "-22.5%" }}>
                              <p>{e.split("Documents/")[1]}</p>
                            </center>
                          </div>
                        </a>
                      </div>
                    );
                  })}{" "}
                </div>
                <br />
                <br />
                <br />
              </section>
            ) : (
              active == "General Documents" && (
                <center>
                  <h2>No Documents yet</h2>
                </center>
              )
            )}
          </Container>
          <br />
          <br />
          <br />
          <br />
          <Footer active="Download" />
        </section>
      )}
    </>
  );
}
export default Download;

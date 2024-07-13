import { useState } from "react";
import Email from "./Email";
import { useEffect } from "react";
function DownloadFiles(props) {
  let text = [
    "Generating a datasheet download for these model variants of a specific type requires some time. Kindly provide us with your name and email address, please.",
    "Initiating the process of obtaining Test Certification for these model variants of a particular type requires some time. Kindly input your name, email address, and country of origin, please.",
    "Initiating an IES request for these model variants of a specific type takes some time. Kindly provide your name, email address, and country, please.",
  ];
  const [item, setItem] = useState("");
  function handleClick(e) {
    localStorage.setItem("active", e.target.textContent);
    console.log(e.target.id);
    if (e.target.id == "TEST") setItem(text[1]);
    else if (e.target.id == "IES") setItem(text[2]);
    else setItem(text[0]);
    const popup = document.getElementById("popup1");

    popup.style.visibility = "visible";
    popup.style.opacity = "1";
  }
  useEffect(() => {});
  return (
    <div className="col-sm-6 col-lg-2 d-flex ">
      <div
        className="d-flex"
        style={{
          alignItems: "flex-start",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <br />
      </div>
      <div
        className="d-flex"
        style={{ alignItems: "flex-end", flexDirection: "column" }}
      >
        <h2 style={{ marginRight: "auto" }}>Download</h2>
        <a
          href="#popup1"
          id="Data"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
          name="datasheet"
        >
          <div
            className="download btn btn-danger"
            id="Data"
            style={{ width: "200px", textAlign: "center" }}
          >
            <img id="Data" src="/static/download.svg" alt="" />
            DataSheet
          </div>
        </a>

        <Email
          Model={props.Model}
          text={item}
          type={text.indexOf(item)}
          dataSheet={props.dataSheet}
        />
        <a
          href="#popup1"
          style={{ textDecoration: "none" }}
          name="Test Certification"
          id="TEST"
          onClick={handleClick}
        >
          <div
            className="download btn btn-danger"
            id="TEST"
            style={{ width: "200px", textAlign: "center" }}
          >
            <img id="TEST" src="/static/download.svg" alt="" />
            Test Certificate
          </div>
        </a>
        <a
          href="#popup1"
          id="IES"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
          name="IES"
        >
          <div
            id="IES"
            className="download btn btn-danger"
            style={{ width: "200px", textAlign: "center" }}
          >
            <img id="IES" src="/static/download.svg" alt="" />
            IES Files
          </div>
        </a>
      </div>
    </div>
  );
}
export default DownloadFiles;

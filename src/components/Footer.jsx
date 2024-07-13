import NavList from "./NavList";

function Footer(props) {
  return (
    <div
      className="info"
      style={{
        marginTop: "-50px",
        marginBottom: "-200px",
        backgroundColor: "#212529",
        color: "white",
        padding: "0.5% 7.5% 0",
        textAlign: "left",
      }}
    >
      <footer className="py-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <h3 style={{ marginLeft: "13px" }}>Menu</h3>
            <NavList
              classes={"nav flex-column foot"}
              arr={["Home", "About", "Products", "Download", "Contact Us"]}
              point={"mb-2"}
              active={props.active}
              footer={"p-0 text-body-secondary"}
              links={["/", "/About", "/Products", "/Download", "/ContactUS"]}
            />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <h4 style={{ marginLeft: "13px" }}>Download</h4>
            <NavList
              classes={"nav flex-column foot"}
              point={"mb-2"}
              arr={["Catalog", "Company Certificate", "General Documents"]}
              links={["/Download", "/Download", "/Download"]}
              footer={"p-0 text-body-secondary"}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <h4 style={{ marginLeft: "10px" }}>Avvio Social</h4>
            <NavList
              classes={"nav flex-column foot"}
              arr={["LinkedIn", "Instagram", "YouTube"]}
              links={[
                "https://www.linkedin.com/company/avvio-lighting/",
                "https://instagram.com",
                "https://www.youtube.com",
              ]}
              img={["linkedin.svg", "instagram.svg", "youtube.svg"]}
              point={"mb-2"}
              active={props.active}
              footer={"p-0 text-body-secondary"}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <img src="/imgs/logowhite.svg" width="50%" />
            <br />
            <br />
            <h6 className="foot">Avvio Lighting Head Office</h6>
            <p className="foot">
              <table style={{ width: "100%" }}>
                <tr>
                  <td style={{ textWrap: "nowrap" }}>
                    <b>cím.</b>
                  </td>
                  <td style={{ textWrap: "nowrap" }}>
                    4025 Debrecen, Simonffy Utca 4-6,
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td> Hungary</td>
                </tr>
              </table>
            </p>
          </div>
        </div>
        <p style={{ float: "left" }}>
          © 2023 Company, Inc. All rights reserved
        </p>

        <p>.</p>
      </footer>
    </div>
  );
}
export default Footer;

function Info() {
  return (
    <div className="info">
      <div className="row row-cols-1 row-cols-lg-1 row-cols-sm-2 row-cols-md-1 g-4">
        <div className="col">
          <h3>Contact info</h3>
          <table
            className="table table-borderless"
            style={{ backgroundColor: " #eeeeee !important" }}
          >
            <tr>
              <td width="15%">
                <h5>Email</h5>
              </td>
              <td width="10%">
                <h5>:</h5>
              </td>
              <td>AvvioLighting@gmail.com</td>
            </tr>
            <tr>
              <td width="15%">
                <h5>Phone Number</h5>
              </td>
              <td width="10%">
                <h5>:</h5>
              </td>
              <td>+920581082</td>
            </tr>
            <tr>
              <td width="15%">
                <h5>tax</h5>
              </td>
              <td width="10%">
                <h5>:</h5>
              </td>
              <td>515187818</td>
            </tr>
            <tr>
              <td width="15%">
                <h5>Contact US</h5>
              </td>
              <td width="10%">
                <h5>:</h5>
              </td>
              <td>
                <a
                  className="btn btn-dark"
                  style={{
                    backgroundColor: "var(--bs-dark)",
                    color: "white",
                  }}
                  href="#cont"
                >
                  Contact Us
                </a>
              </td>
            </tr>
            <tr>
              <td width="15%">
                <h5>Find US</h5>
              </td>
              <td width="10%">
                <h5>:</h5>
              </td>
              <td>
                <a
                  className="btn btn-dark"
                  style={{
                    width: " 103px",
                    backgroundColor: "var(--bs-dark)",
                    color: "white",
                  }}
                  href="#location"
                >
                  find us
                </a>
              </td>
            </tr>
          </table>

          <br />

          <br />
        </div>
      </div>
    </div>
  );
}
export default Info;

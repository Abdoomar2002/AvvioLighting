import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Alert from "./Alert";
import { type } from "@testing-library/user-event/dist/type";
import { FormCheck } from "react-bootstrap";

function Email(props) {
  function hide() {
    let popup = document.getElementById("popup1");
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";

    return 0;
  }
  let [loading, setLoading] = useState(false);
  const [act, setAct] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });
  // console.log(props.dataSheet, props.type);
  let ready =
    props.type == 0 || props.type == 3 || props.type == 4
      ? { display: "none" }
      : { display: "" };
  const [popupVisible, setPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setPopupVisible(!popupVisible);
  };
  function handleSubmit(e) {
    setLoading(true);

    let submitData = {
      name: e.target[0].value,
      email: e.target[1].value,
    };
    e.preventDefault();

    if (props.type == 0) {
      console.log(props.dataSheet);
      submitData.files = [
        {
          productName: props.Model,
          dataSheet: props.dataSheet,
          // IESfiles: "product_xyz_iesfiles.pdf",
          // testCertificateFiles: "product_xyz_testCertificateFiles.pdf",
        },
      ];
    } else if (props.type == 1) {
      submitData.files = [
        {
          productName: props.Model,

          // IESfiles: "product_xyz_iesfiles.pdf",
          testCertificateFiles: props.Model + "_testCertificateFiles.pdf",
        },
      ];
    } else if (props.type == 3) {
      submitData.files = [
        {
          companyCertificate: props.dataSheet,

          // IESfiles: "product_xyz_iesfiles.pdf",
        },
      ];
    } else if (props.type == 4) {
      submitData.files = [
        {
          generalDocuments: props.dataSheet,
        },
      ];
    } else if (props.type == 5) {
      submitData.files = [
        {
          catalogs: "catalogs",
        },
      ];
    } else {
      submitData.files = [
        {
          productName: props.Model,

          IESfiles: props.Model + "_iesfiles.pdf",
          // testCertificateFiles: "product_xyz_testCertificateFiles.pdf",
        },
      ];
    }
    if (props.type <= 2)
      axios
        .post(
          "https://avvio-website-w5pw.onrender.com/api/v1/users",
          submitData
        )
        .then((res) => {
          setLoading(false);
          // setTimeout(hide(), 2000);
          console.log(res);
          setNotification({ type: "success", message: res.data.message });
          setAct(true);
          if (props.type === 0) {
            window.open(
              "https://avvio-website-w5pw.onrender.com" + props.dataSheet,
              "blank"
            );
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.status == 429);
          else
            setNotification({
              type: "error",
              message: err.response.data.message,
            });
          setAct(true);
          setLoading(false);
        });
    else
      axios
        .post(
          "https://avvio-website-w5pw.onrender.com/api/v1/download",
          submitData
        )
        .then((res) => {
          setLoading(false);
          console.log(res);
          setNotification({ type: "success", message: res.data.message });
          setAct(true);
          if (props.type === 3 || props.type === 4) {
            window.open(
              "https://avvio-website-w5pw.onrender.com" + props.dataSheet,
              "blank"
            );
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.status == 429);
          else
            setNotification({
              type: "error",
              message: err.response.data.message,
            });
          setAct(true);
          setLoading(false);
        });
    //  document.getElementById("downloadLink").click();
  }
  useEffect(() => {
    //  console.log(props.dataSheet, props.type);
    let popup = document.getElementById("popup1");
    let close = document.getElementById("close");
    let Model = document.getElementById("Model");
    document.addEventListener("click", function (event) {
      if (event.target === popup || event.target === Model) {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
      }
    });
    close.addEventListener("click", function (event) {
      popup.style.visibility = "hidden";
      popup.style.opacity = "0";
    });
  }, []);
  //let ready = props.ready ? { display: "" } : { display: "none" };
  return (
    <div id="popup1" className="overlay">
      <div className="popup">
        <a className="close" id="close" href="#">
          &times;
        </a>
        <br></br>
        <Alert
          message={notification.message}
          type={notification.type}
          set={setAct}
          act={act}
        />
        <h6>{props.text}</h6>
        <br />
        {loading && <Loader />}
        <div className="content">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-group mb-3 w-85">
              <span className="input-group-text email" id="basic-addon1">
                Your Name
              </span>
              <input
                type="text"
                className="form-control "
                placeholder="John Doe"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div className="input-group mb-3 w-85">
              <span className="input-group-text email" id="basic-addon2">
                Your Email
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="John@gmail.com"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                required
              />
            </div>
            <select
              name="country"
              className="form-select w-85"
              required
              style={ready}
            >
              <option value="">-- Country --</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="America- Oceania">America- Oceania</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Ceuta Esp.">Ceuta Esp.</option>
              <option value="Chile">Chile</option>

              <option value="Croatia">Croatia</option>
              <option value="Clipperton">Clipperton</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Chad">Chad</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Democratic Republic of the Congo">
                Democratic Republic of the Congo
              </option>
              <option value="Diego Garcia , BTOI">Diego Garcia , BTOI</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominica">Dominica</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Egypt">Egypt</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="European Monetary Union">
                European Monetary Union
              </option>
              <option value="Falklands">Falklands</option>
              <option value="Federation of Saint Kitts and Nevis">
                Federation of Saint Kitts and Nevis
              </option>
              <option value="Fiji">Fiji</option>
              <option value="Philippines">Philippines</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Plane Fransuckie Territories .">
                Plane Fransuckie Territories .
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia Plane . Sandwich Plane">
                Georgia Plane . Sandwich Plane
              </option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Greenland">Greenland</option>
              <option value="Georgia">Georgia</option>
              <option value="Guam">Guam</option>
              <option value="Guiana">Guiana</option>
              <option value="French Guiana">French Guiana</option>
              <option value="Guadeloupe , Fr.">Guadeloupe , Fr.</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Guinea - Bissau">Guinea - Bissau</option>
              <option value="Haiti">Haiti</option>
              <option value="Spain">Spain</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iraq">Iraq</option>
              <option value="Iran">Iran</option>
              <option value="Ireland">Ireland</option>
              <option value="Iceland">Iceland</option>
              <option value="Israel">Israel</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Yemen">Yemen</option>
              <option value="Jersey, WB">Jersey, WB</option>
              <option value="Jordan">Jordan</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="CANADA">CANADA</option>
              <option value="catarrh">catarrh</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Colombia">Colombia</option>
              <option value="chamber">chamber</option>
              <option value="South Korea">South Korea</option>
              <option value="North Korea">North Korea</option>
              <option value="Kosovo, Serbia">Kosovo, Serbia</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="The Kingdom of Morocco">
                The Kingdom of Morocco
              </option>
              <option value="Cuba">Cuba</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Laos">Laos</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Lebanon">Lebanon</option>
              <option value="livery">livery</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Latvia">Latvia</option>
              <option value="Macedonia">Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Macau">Macau</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldives">Maldives</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Northern Mariana Islands">
                Northern Mariana Islands
              </option>
              <option value="Morocco">Morocco</option>
              <option value="Martinique, Fr.">Martinique, Fr.</option>
              <option value="Mauretania">Mauretania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Melilla , inclu .">Melilla , inclu .</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar ( Burma)">Myanmar ( Burma)</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Germany">Germany</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niue">Niue</option>
              <option value="Norway">Norway</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="Poland">Poland</option>
              <option value="puerto Rico">puerto Rico</option>
              <option value="Portugal">Portugal</option>
              <option value="Federation Republic of Yugoslavia">
                Federation Republic of Yugoslavia
              </option>
              <option value="The Republic of Congo">
                The Republic of Congo
              </option>
              <option value="South Africa">South Africa</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Romania">Romania</option>
              <option value="St. Lucia">St. Lucia</option>
              <option value="Saint Vincent and the Grenadines">
                Saint Vincent and the Grenadines
              </option>
              <option value="Saint-Pierre and Miquelon Fr.">
                Saint-Pierre and Miquelon Fr.
              </option>
              <option value="El Salvador">El Salvador</option>
              <option value="Samoa">Samoa</option>
              <option value="American Samoa">American Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Somalia">Somalia</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="United States of America">
                United States of America
              </option>
              <option value="Ship, aircraft">Ship, aircraft</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen, Nor.">
                Svalbard and Jan Mayen, Nor.
              </option>
              <option value="Syria">Syria</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Sweden">Sweden</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Thailand">Thailand</option>
              <option value="Taiwan , R.O.C.">Taiwan , R.O.C.</option>
              <option value="Brit Territories . Ind Ocean .">
                Brit Territories . Ind Ocean .
              </option>
              <option value="East Timor">East Timor</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad iTobago">Trinidad iTobago</option>
              <option value="Tristan da Cunha">Tristan da Cunha</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos">Turks and Caicos</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="French Union">French Union</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Wallis and Futuna Islands">
                Wallis and Futuna Islands
              </option>
              <option value="Vatican">Vatican</option>
              <option value="Cooka Islands">Cooka Islands</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Hungary">Hungary</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Italy">Italy</option>
              <option value="Cote d'Ivoire">Cote d'Ivoire</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Guernsey , WB">Guernsey , WB</option>
              <option value="Man Isle, WB">Man Isle, WB</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Ascension Island">Ascension Island</option>
              <option value="Åland Islands">Åland Islands</option>
              <option value="The US Virgin Islands">
                The US Virgin Islands
              </option>
              <option value="WB Virgin Islands">WB Virgin Islands</option>
              <option value="Heard Island and McDonald">
                Heard Island and McDonald
              </option>
              <option value="Canary Islands, inclu .">
                Canary Islands, inclu .
              </option>
              <option value="Cocos Islands">Cocos Islands</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="The Faroe Islands">The Faroe Islands</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Sao Tome and Principe . Sao Tome and Principe">
                Sao Tome and Principe . Sao Tome and Principe
              </option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
              <option value="United Republic of Tanzania">
                United Republic of Tanzania
              </option>
              <option value="United Arab Emirates">United Arab Emirates</option>
            </select>
            <br />
            <input type="checkbox" required />
            {"  "}
            By providing your information, you agree to our Privacy Policy and
            Terms of Service.
            <div className="d-flex w-85 justify-content-end">
              <button type="submit" value="Submit" className="btn btn-danger">
                {props.text.includes("datasheet") ? "Download" : "Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Email;

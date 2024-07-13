import axios from "axios";
import { useState } from "react";
import { Form } from "react-router-dom";
import Loader from "./Loader";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    let submitData = {
      name: e.target[0].value + " " + e.target[1].value,
      email: e.target[3].value,
      country: e.target[4].value,
      phone: e.target[2].value,
      message: e.target[5].value,
    };
    axios
      .post("https://avvio-website-w5pw.onrender.com/api/v1/users", submitData)
      .then((res) => {
        console.log(res);
        alert("success");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("Faild");
        console.log(err);
      });
  }
  return (
    <form
      className="row row-cols-1 row-cols-lg-1 row-cols-sm-2 row-cols-md-3 g-4"
      onSubmit={handleSubmit}
    >
      <h3>Send Email</h3>
      <div className="form-floating mb-3 w-50">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="First Name"
          required
        />
        <label htmlFor="floatingInput">First Name</label>
      </div>
      <div className="form-floating w-50">
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Last Name"
          required
        />
        <label htmlFor="floatingPassword">Last Name</label>
      </div>
      <br />
      <div className="form-floating w-50">
        <input
          type="text"
          className="form-control"
          id="floatingNumber"
          placeholder="Phone Number"
          required
        />
        <label htmlFor="floatingNumber"> Phone Number</label>
      </div>
      <br />
      <div className="form-floating mb-3 w-50">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="=Email"
          required
        />
        {loading && <Loader />}
        <label htmlFor="floatingInput"> Email</label>
      </div>
      <div className="form-floating mb-3 w-50">
        <select name="country" className="form-select" required>
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
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
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
          <option value="The Kingdom of Morocco">The Kingdom of Morocco</option>
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
          <option value="The Republic of Congo">The Republic of Congo</option>
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
          <option value="The US Virgin Islands">The US Virgin Islands</option>
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
        <label htmlFor="country">Country</label>
      </div>
      <div className="form-floating w-100">
        <textarea
          className="form-control"
          id="message"
          cols="30"
          rows="30"
          style={{ height: "150px" }}
        ></textarea>
        <label htmlFor="message">Your message</label>
        <br /> <input type="checkbox" required />
        {"  "}
        <span style={{ fontSize: ".8rem" }}>
          {" "}
          By providing your information, you agree to our Privacy Policy and
          Terms of Service.
        </span>
        <br />
      </div>

      <div className="col-12 d-flex justify-content-end">
        <button
          className="btn btn-danger"
          type="submit"
          style={{ height: " 50px", width: "150px", fontSize: "1.3rem" }}
        >
          Send Email
        </button>
      </div>
    </form>
  );
}
export default ContactForm;

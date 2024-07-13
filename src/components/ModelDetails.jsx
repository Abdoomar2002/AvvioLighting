import axios from "axios";
import { useEffect, useState } from "react";

function ModelDetails(props) {
  const [vectors, setVectors] = useState([]);

  useEffect(() => {
    axios
      .get("https://avvio-website-w5pw.onrender.com" + props.vector)
      .then((res) => {
        //  console.log(res.data.vectors);
        setVectors(res.data.vectors);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="col-sm-6 col-lg-4">
      <br />
      <h6 style={{ width: "100%" }}>{props.description}</h6>
      <ul>
        {props.points.map((e, index) => {
          return <li key={index}>{e}</li>;
        })}
      </ul>
      <div className="vector">
        {vectors &&
          vectors.map((e, index) => {
            return (
              <img
                key={index}
                src={"https://avvio-website-w5pw.onrender.com" + e}
                //onError={(e) => (e.target.src = "/static/default.svg")}
              />
            );
          })}
      </div>
    </div>
  );
}
export default ModelDetails;

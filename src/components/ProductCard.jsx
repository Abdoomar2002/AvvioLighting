import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function ProductCard(props) {
  const [Images, setImages] = useState([]);

  let link = props.link
    ? window.location + "/" + props.name
    : "/Products/" + props.name;
  link = props.similar == true ? "./" + props.name : link;
  if (props.Search == true) {
    link = "/Products/" + props.category + "/" + props.name;
    //   console.log("/Products/" + props.category + "/" + props.name);
  }
  // console.log(props.img);
  useEffect(() => {
    if (props.cat == true) {
      axios
        .get("https://avvio-website-w5pw.onrender.com" + props.img)
        .then((res) => {
          let a = res.data.images ? res.data.images : [];
          setImages(a);
          //  console.log(res.data.images);
          //  let sorted = res.data.images.findIndex("Main");
          //console.log(sorted);
          // Find the index of the element containing the word "main"
          /*   const mainIndex = sorted.findIndex((element) =>
            element.includes("Main")
          );

          if (mainIndex !== -1) {
            // Remove the element from its current position
            const mainElement = sorted.splice(mainIndex, 1)[0];

            // Add the main element to the beginning of the array
            sorted.unshift(sorted);
          }
          console.log(res.data.images[0][1]);
          setImages(sorted);
          // console.log(res.data.images);*/
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      axios
        .get(
          "https://avvio-website-w5pw.onrender.com/api/v1/products" + props.img
        )
        .then((e) => {
          setImages(e.data.images);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [props.img]);
  return (
    <div className="col col-lg-2 col-md-3 col-sm-6">
      <a href={link} className="link-underline link-underline-opacity-0">
        <div className="card  card-hover">
          {
            //console.log("https://avvio-website-w5pw.onrender.com/" + Images)}
          }

          {props.cat ? (
            <img
              src={
                Images[0] != undefined
                  ? "https://avvio-website-w5pw.onrender.com" + Images[0]
                  : "/imgs/default.png"
              }
              className="card-img-top h-75"
              alt="..."
            />
          ) : (
            <img
              src={
                Images[0] != undefined
                  ? "https://avvio-website-w5pw.onrender.com" + Images[0]
                  : "/imgs/default.png"
              }
              className="card-img-top h-75"
              alt="..."
            />
          )}

          <div className="card-body ">
            <h5 className="card-title">{props.name}</h5>
          </div>
        </div>
      </a>
    </div>
  );
}
export default ProductCard;

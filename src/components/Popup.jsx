import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
function Popup(props) {
  useEffect(() => {
    let popup = document.getElementById("popup2");
    let close = document.getElementById("close2");
    let Model = document.getElementById("Model");

    document.addEventListener("click", function (event) {
      if (event.target === popup || event.target === Model) {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
      }
      if (
        event.target.classList[0] == "content" ||
        event.target.classList[0] == "full-image"
      ) {
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
  return (
    <div className="overlay pop" id="popup2">
      <div className="popup2">
        <a className="close" id="close2" href="#">
          &times;
        </a>
        <div className="content">
          <Carousel interval={null} style={{ width: "95%" }}>
            {props.img &&
              props.img.map((e, index) => {
                return (
                  <Carousel.Item key={index} className="full-image">
                    <img
                      src={"https://avvio-website-w5pw.onrender.com" + e}
                      style={{
                        width: "fit-content",
                        height: "fit-content",
                        maxHeight: "90vh",
                        maxWidth: "90%",
                      }}
                      alt="..."
                    />
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Popup;

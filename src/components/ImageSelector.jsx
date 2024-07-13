import { useState, useEffect, useRef } from "react";
import Popup from "./Popup";
import Loader from "./Loader";
import axios from "axios";
import { Carousel } from "react-bootstrap";

function ImageSelector(props) {
  const [activeImage, setActiveImage] = useState("");
  const [loadedImages, setLoadedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  //console.log(props.img);
  const carouselRef = useRef(null);

  const goToSlide = (index) => {};
  useEffect(() => {
    axios
      .get("https://avvio-website-w5pw.onrender.com" + props.modelFiles)
      .then((res) => {
        // console.log(res.data.images);
        setLoadedImages(res.data.images);
        if (res.data.images.length > 0) {
          // console.log(res.data.images[0]);
          setActiveImage(res.data.images[0]);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  function handleError(e) {
    e.target.src = "/imgs/default.png";
  }
  function changPhoto(e) {
    if (carouselRef.current) {
      carouselRef.current.element.childNodes[0].childNodes[e].click();

      //carouselRef.current.select(e);
    }
  }
  function handleClick() {
    const popup = document.getElementById("popup2");
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    console.log(popup);
  }
  const contentWrapper = useRef(null);

  const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  return (
    <div className="image-selector col">
      <style>
        {`
    .carousel-control-prev-icon
    {
      background-Image:url("/imgs/left-model.png")
    }
    .carousel-control-next-icon {
      background-Image:url("/imgs/right-model.png")
    }
    .carousel-indicators:after
     {
      
    }
    
    .carousel-indicators
     {
     display:none;
    }`}
      </style>
      {loadedImages.length > 1 && null && (
        <div
          className="d-flex justify-content-between"
          style={{
            position: "relative",
            zIndex: "99",
            width: "100%",
            left: "0px",
            top: "40px",
          }}
        >
          <img
            src="/imgs/left-model.png"
            className="arrows"
            onClick={() => {
              sideScroll(
                contentWrapper.current,
                0,
                200,
                (-1 * window.innerWidth) / 1.5
              );
            }}
          />

          <img
            src="/imgs/right-model.png"
            className="arrows"
            onClick={() => {
              sideScroll(
                contentWrapper.current,
                0,
                200,
                window.innerWidth / 1.5
              );
            }}
          />
        </div>
      )}
      {loadedImages.length > 0 && (
        <Carousel
          showthumbs={"false"}
          style={{
            height: "400px ",
            width: "inherit",
            border: "2px #eee solid",
          }}
          interval={null}
          className="custom-carousel scroller"
          ref={carouselRef}
        >
          {loadedImages.map((e) => {
            return (
              <Carousel.Item key={e}>
                <a
                  href="#popup2"
                  onClick={handleClick}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img
                    style={{ height: "395px ", maxWidth: "100%" }}
                    src={"https://avvio-website-w5pw.onrender.com" + e}
                  />
                </a>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
      <Popup img={loadedImages} />
      <div className="image-buttons" ref={contentWrapper}>
        {loadedImages.map((e, index) => {
          return (
            <img
              key={index}
              src={"https://avvio-website-w5pw.onrender.com" + e}
              alt=""
              className="small-image"
              style={{ cursor: "pointer", height: "125px" }}
              onClick={(elem) => {
                changPhoto(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ImageSelector;

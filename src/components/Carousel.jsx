import { useRef } from "react";
import Data from "../assest/FakeCarouselData.json";
import { Carousel as Car } from "react-bootstrap";
function Carousel() {
  let buttons = Data[0].buttons;
  let items = Data[0].items;

  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video time to start
      videoRef.current.play(); // Start playing again

      // Change to the next carousel slide
      if (carouselRef.current) {
        const currentSlideIndex = carouselRef.current.getActiveIndex();
        const nextSlideIndex =
          (currentSlideIndex + 1) % carouselRef.current.getItemCount();
        carouselRef.current.to(nextSlideIndex);
      }
    }
  };
  async function handleLoadedData(e) {
    let time = 2000;
    let interval = setInterval(() => {
      if (carouselRef.current) {
        let a = carouselRef.current.element;
        //a = a.getElementById("0");
        try {
          if (a.childNodes[1].childNodes[1].classList.contains("active")) {
            a.childNodes[1].childNodes[1].childNodes[1].play();
            clearInterval(interval);
            // console.log("done");
          } else {
            // console.log(a.childNodes[1].childNodes[1]);
          }
        } catch (error) {
          console.log(error);
        }
      }
      if (carouselRef.current == 1) {
        e.target.autoplay = true;
        e.target.play();
      }
    }, time);
  }

  return (
    <Car
      interval={null}
      ref={carouselRef}
      showthumbs={"false"}
      style={{ height: "100vh", width: "100vw", top: 0 }}
    >
      {items.map((e, index) => {
        return (
          <Car.Item
            key={index}
            id={index}
            style={{ height: "100vh", width: "100vw" }}
          >
            <div
              className="container"
              style={{
                marginTop: "100px",
                position: "absolute",
                bottom: "20%",
                left: "7%",
              }}
            >
              <style>
                {`.carousel-indicators,.carousel-control-next,.carousel-control-prev
            {
              display:none;
            }
            `}
              </style>
              {/*<div className="carousel-caption" style={{ color: "black" }}>
                <h1>{e.heading}</h1>
                <p>{e.text}</p>
                <p>
                  <a className="btn btn-lg btn-danger" href={e.link}>
                    {e.button}
                  </a>
                </p>
            </div>*/}
            </div>
            {e.img.includes("mp4") && (
              <video
                ref={videoRef}
                src="/imgs/v1.mp4"
                autoPlay
                loop
                onEnded={handleVideoEnd} // Call the function when the video ends
                style={{ width: "99vw" }}
              >
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Car.Item>
        );
      })}
    </Car>
  );
  /* 

  return (
    /*  <div
      id="myCarousel"
      className="carousel slide mb-6 .section"
      data-bs-ride="carousel"
      data-bs-theme="light"
    >
      <CarouselListButtons arr={buttons} />
      <CarouselList arr={items} />
      <CarouselNextPrev action="prev" text="Pervious" />
      <CarouselNextPrev action="next" text="Next" />
    </div>
    <div
      id="myCarousel"
      className="carousel slide mb-6 .section"
      data-bs-ride="carousel"
      data-bs-theme="light"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className=""
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          className="active"
          aria-label="Slide 2"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            src="imgs/2.png"
            className="bd-placeholder-img w-100"
            style={{ opacity: 0.6 }}
            alt=""
          />
          <div className="container">
            <div className="carousel-caption" style={{ color: "black" }}>
              <h1>Example headline.</h1>
              <p className="opacity-75">
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <p>
                <a
                  className="btn btn-lg btn-primary"
                  href="https://getbootstrap.com/docs/5.3/examples/carousel/#"
                >
                  Sign up today
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <img
            src="imgs/1.png"
            className="bd-placeholder-img w-100"
            style={{ opacity: 0.6 }}
            alt=""
          />
          <div className="container">
            <div className="carousel-caption" style={{ color: "black" }}>
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p>
                <a
                  className="btn btn-lg btn-primary"
                  href="https://getbootstrap.com/docs/5.3/examples/carousel/#"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="imgs/3.png"
            className="bd-placeholder-img w-100"
            style={{ opacity: 0.6 }}
            alt=""
          />
          <div className="container">
            <div className="carousel-caption" style={{ color: "black" }}>
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a
                  className="btn btn-lg btn-primary"
                  href="https://getbootstrap.com/docs/5.3/examples/carousel/#"
                >
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
  */
}
export default Carousel;

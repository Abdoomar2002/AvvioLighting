import { useEffect, useState, useRef } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import "./Recent.module.css";
function Recent() {
  let rand = Math.ceil(Math.random() * 2) + 1;

  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();

  const [randomProducts, setRandomProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    axios
      .get(
        "https://avvio-website-w5pw.onrender.com/api/v1/products/getRandomProducts/20"
      )
      .then((res) => {
        // console.log(res.data.docs);
        /*  setFirst(res.data.docs.slice(0, 5));
        setSecond(res.data.docs.slice(25, 30));
        setThird(res.data.docs.slice(45, 50));*/

        //shuffleArray(res.data.docs);
        // let all = res.data.docs.slice(0, 5).concat(res.data.docs.slice(25, 30));
        //all = all.concat(res.data.docs.slice(45, 50));
        setRandomProducts(res.data.randomProducts);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
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
  }; /*
  <Styled.ButtonWrapper>
  <Styled.Button
    onClick={() => {
      sideScroll(contentWrapper.current, 25, 100, -10);
    }}
  >
    Left
  </Styled.Button>
  <Styled.Button
    onClick={() => {
      sideScroll(contentWrapper.current, 25, 100, 10);
    }}
  >
    Right
  </Styled.Button>
*/
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container style={{ marginTop: "-50px" }}>
          <center>
            <h1 className="first ">Recent Products</h1>
          </center>
          <br />
          <div className=" g-4 recent" ref={contentWrapper}>
            {randomProducts
              ? randomProducts.map((e, index) => {
                  return (
                    <ProductCard
                      img={e.modelFiles}
                      name={e.Model}
                      key={Math.random()}
                      category={e.productType}
                      link={e.Model}
                      Search={true}
                      cat={true}
                    />
                  );
                })
              : error}
          </div>
          <div className="scroll-buttons d-flex justify-content-between">
            <img
              src="/imgs/prev.png"
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
              src="/imgs/next.png"
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
          <br />
          <br />
          <br /> <br />
          <br />
        </Container>
      )}
    </>
  );
}
export default Recent;

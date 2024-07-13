import Navbar from "../components/NavBar";
import Consts from "../components/Consts";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Search() {
  const { key } = useParams();
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(4);
  const [image, setImage] = useState("");
  const [loader, setLoader] = useState(true);
  const [max, setMax] = useState(0);
  function showMore(e) {
    setCount(count + 8);
  }
  function showLess(e) {
    setCount(count - 4);
  }

  useEffect(() => {
    axios
      .get(
        "https://avvio-website-w5pw.onrender.com/api/v1/products?search=" + key
      )
      .then((res) => {
        setResults(res.data.docs);
        setMax(res.data.length);
        setLoader(false);
      }) // Convert response to JSON

      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoader(false);
      });
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section>
          <Navbar />

          <br />
          <Container style={{ marginBottom: "100px" }}>
            <h1 className="first" style={{ marginTop: "100px" }}>
              Search key: {key}
            </h1>
            <br />
            <br />
            <div className="cards-show row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
              {results ? (
                results.map((e, index) => {
                  if (index < count) {
                    return (
                      <ProductCard
                        key={index}
                        name={e.Model}
                        img={e.modelFiles}
                        Search={true}
                        cat={true}
                        category={e.productType}
                      />
                    );
                  } else return <></>;
                })
              ) : (
                <h4 style={{ textAlign: "center", width: "100%" }}>
                  No Result Match With {key}
                </h4>
              )}
              <br />
              <br />
              <br />
              <br />
            </div>
            <br></br>
            <section
              className={
                count > 4
                  ? "d-flex justify-content-between"
                  : "d-flex justify-content-end"
              }
            >
              {count > 4 && (
                <button
                  id="showLessBtn"
                  onClick={showLess}
                  className="btn btn-lg btn-dark"
                  style={{ marginRight: "40px" }}
                >
                  Show Less
                </button>
              )}
              {count < max && (
                <button
                  id="showMoreBtn"
                  onClick={showMore}
                  className="btn btn-lg btn-danger"
                >
                  Show More
                </button>
              )}
            </section>
          </Container>

          <Footer />
        </section>
      )}
    </>
  );
}
export default Search;

import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Consts from "../components/Consts";
import { useEffect, useState } from "react";
//import Data from "../assest/Category.json";
import ProductCard from "../components/ProductCard";
import { Button, Collapse, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import axios from "axios";
import Loader from "../components/Loader";
function Category() {
  const [arr, setArr] = useState([]);
  const [images, setImages] = useState([]);
  const [types, setTypes] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  let { name } = useParams();
  useEffect(() => {
    axios
      .get(
        "https://avvio-website-w5pw.onrender.com/api/v1/products?productType=" +
          name
      )
      .then((res) => {
        if (res.data.length > 0) {
          setArr(res.data.docs);
          const newTypes = res.data.docs.map((doc) => doc.Model);
          const newImages = res.data.docs.map((doc) => doc.modelFiles);
          setTypes((e) => [...newTypes]);
          setImages((e) => [...newImages]);
          setLoading(true);
        }
        setLoading(true);
      })
      .catch((err) => {
        setLoading(true);
      })
      .finally((res) => {});
  }, [name]);
  function toggleCollapse(e) {
    setOpen(!open);
  }
  return (
    <>
      {loading === false ? (
        <Loader />
      ) : (
        <section>
          <NavBar active="Products" />

          <br />

          <div className="container path">
            <a
              href="/"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Home {">"}
            </a>
            <a
              href="/Products"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              &nbsp; Products {">"}
            </a>
            <a
              href="# "
              className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              &nbsp; {name}
            </a>
          </div>
          {types.length !== 0 && images.length !== 0 ? (
            <div className="container">
              {null && (
                <>
                  <Button variant="outline-secondary" onClick={toggleCollapse}>
                    <h4>
                      Filter <img src="/static/funnel-fill.svg" alt=".." />
                    </h4>
                  </Button>
                  <Collapse in={open} className="abc">
                    <div>
                      <table width={"100%"}>
                        {arr !== undefined &&
                          Object.entries(arr).map((e, index) => {
                            return (
                              <tr key={index}>
                                <td width="50%">{e[0]}</td>
                                <td>{e[1].length}</td>
                                <br />
                                <br />
                              </tr>
                            );
                          })}
                      </table>
                    </div>
                  </Collapse>{" "}
                </>
              )}
              {"  "}
              <h1 className="first">{name}</h1>
              <br />
              <br />

              <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
                {arr !== undefined &&
                  Object.entries(types).map((key, e) => {
                    return (
                      <ProductCard
                        link={true}
                        cat={true}
                        key={e}
                        img={images[e]}
                        name={types[e]}
                        id={key._id}
                      />
                    );
                  })}
              </div>
            </div>
          ) : (
            <Container>
              <h1 className="first">{name}</h1>
              <br />
              <br />
              <center>
                <h4>There Is No Models To Show</h4>
              </center>
              <br></br>
            </Container>
          )}
          <br />
          <br />
          <br />
          <br />
          <Footer active="Products" />
        </section>
      )}
    </>
  );
}
export default Category;

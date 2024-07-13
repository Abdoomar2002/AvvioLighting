import axios from "axios";
//import Consts from "../components/Consts";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
//import Data from "../assest/ProductCatalog.json";
import Loader from "../components/Loader";
import { Collapse, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
function Products() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  let [arr, setArr] = useState([]);

  function toggleCollapse(e) {
    setOpen(!open);
  }
  useEffect(() => {
    axios
      .get("https://avvio-website-w5pw.onrender.com/api/v1/products/categories")
      .then((res) => {
        setArr(res.data.categories);

        setLoading(true);
      })
      .catch((err) => {
        setLoading(true);
        return err.message;
      });

    // let keys = Object.keys(arr);
  }, []);
  return (
    <>
      {loading === false ? (
        <Loader />
      ) : (
        <section>
          <NavBar active="Products" />

          <br />

          <div className="container path" style={{ textAlign: "left" }}>
            <a
              href="/"
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Home {">"}
            </a>
            <a
              href="/Products"
              className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              &nbsp; Products {">"}
            </a>
          </div>

          <div className="container">
            <Button
              variant="outline-dark"
              onClick={toggleCollapse}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h4 style={{ marginBottom: "0" }}>
                All Catalogs <img src="/static/arrow-left.svg" alt=".." />
              </h4>
            </Button>

            <Collapse in={open} className="abc">
              <div>
                <br />
                <br />
                <table width={"100%"}>
                  <tbody style={{ display: "grid", rowGap: "25px " }}>
                    {arr &&
                      Object.entries(arr).map((e, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ width: "50vw" }}>
                              <a
                                href={"#" + index}
                                style={{
                                  textDecoration: "none",
                                }}
                              >
                                {e[0]}
                              </a>
                            </td>
                            {
                              <td>
                                <a
                                  href={"#" + index}
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  {e[1].length}
                                </a>
                              </td>
                            }
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </Collapse>
            <br />

            <h1 className="first">Products Catalog</h1>
            <br />
          </div>

          {arr &&
            Object.entries(arr).map(([key, e], index) => (
              <ProductList arr={e} key={index} name={key} id={index} />
            ))}
          <br />

          <div id="Footer"></div>
          <Footer id="Footer" active="Products" />
        </section>
      )}
    </>
  );
}
export default Products;

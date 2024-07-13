import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Consts from "../components/Consts";
//import Data from "../assest/Product.json";
//import Cat from "../assest/ProductCatalog.json";
import Collapse from "react-bootstrap/Collapse";
import { Button, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ImageSelector from "../components/ImageSelector";

import ModelDetails from "../components/ModelDetails";
import DownloadFiles from "../components/DownloadFIles";

import TableList from "../components/TabelList";
//import Similar from "../assest/Category.json";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import axios from "axios";
import Loader from "../components/Loader";
function Model() {
  const [open, setOpen] = useState(false);
  const { category, product } = useParams();
  let [loading, setLoading] = useState(true);
  let [Data, setData] = useState();
  const [arr, setArr] = useState();
  const [table, setTabel] = useState();
  const [types, setTypes] = useState();
  const [imgs, setImgs] = useState();

  useEffect(() => {
    axios
      .get(
        "https://avvio-website-w5pw.onrender.com/api/v1/products?Model=" +
          product
      )
      .then((res) => res.data)
      .then((res) => {
        // let arr = Cat.docs[0].categories;

        setImgs(res.docs[0].modelFiles);
        setTabel(res.docs[0].tabel);
        setData(res);
        let d = res;
        //images = res.categoryImage;
        axios
          .get(
            "https://avvio-website-w5pw.onrender.com/api/v1/products?productType=" +
              res.docs[0].productType
          )
          .then((res) => res.data)
          .then((res) => {
            let beta = Object.entries(res.docs);
            let alpha = beta.filter((e) => e[1].Model != d.docs[0].Model);
            let last = alpha.length > 7 ? 8 : alpha.length;
            alpha = alpha.slice(0, last);
            //console.log(alpha);
            setTypes(alpha);
            //setImgs(res.categoryImage);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
        axios
          .get(
            "https://avvio-website-w5pw.onrender.com/api/v1/products/categories"
          )
          .then((res) => res.data)
          .then((res) => {
            let category = Object.entries(res.categories).filter((e, index) => {
              return e[0] === d.docs[0].categoryName;
            });

            category = Object.entries(category[0][1])[0][1];
            setArr(category);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });

        // imgs=res.data.docs[0].
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    // console.log(Object.entries(Data.data.parameter));
  }, [product]);

  function toggleCollapse(e) {
    setOpen(!open);
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section id="Model">
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
              href={"/Products/" + category}
              className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              &nbsp; {category}
              {">"}
            </a>
            <a
              href="# "
              className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              &nbsp; {product}
            </a>
          </div>
          <Container>
            <Button variant="outline-dark " onClick={toggleCollapse}>
              <h4 style={{ marginBottom: "0" }}>
                {Data.docs[0].categoryName + " Others"}{" "}
                <img src="/static/arrow-left.svg" alt=".." />
              </h4>
            </Button>
            <Collapse in={open} className="abc">
              <div>
                <br />
                <table width={"100%"}>
                  <tbody>
                    {arr &&
                      arr.map((e, index) => {
                        return (
                          <tr key={index}>
                            <td width="50%" style={{ padding: "25px 0" }}>
                              <a
                                href={"/Products/" + e}
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                              >
                                {e}
                              </a>
                            </td>
                            <td>{}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </Collapse>
            <br />
            <br />
            <h1 className="first">{product}</h1>
            <br />
            <br />
            <Row>
              <ImageSelector
                modelFiles={imgs}
                count={Data.docs[0].numberOfImages}
              />

              <ModelDetails
                name={Data.docs[0].Model}
                description={Data.docs[0].description}
                vector={Data.docs[0].modelFiles}
                points={Data.docs[0].points}
              />
              <DownloadFiles
                Model={Data.docs[0].Model}
                dataSheet={Data.docs[0].datasheet}
              />
            </Row>
          </Container>
          <br />
          <br />

          <TableList
            tabel={table}
            Model={product}
            type={Data.docs[0].productType}
          />
          <Container>
            <h2>{types && types.length > 1 && "Similar Products"}</h2>

            <br />
            <br />

            <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
              {types &&
                types.map((key, e) => {
                  return (
                    <ProductCard
                      key={e}
                      img={key[1].modelFiles}
                      cat={true}
                      name={key[1].Model}
                      id={key._id}
                      similar={true}
                      link={true}
                    />
                  );
                })}
            </div>
          </Container>
          <br />
          <br />
          <br />
          <Footer active="Products" />
        </section>
      )}
    </>
  );
}
export default Model;

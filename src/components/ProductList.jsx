import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList(props) {
  let arr = props.arr;
  console.log(arr);
  useEffect(() => {}, []);
  let max = arr.length;
  let images = arr;

  let types = arr.productType;
  //console.log(images);
  const [number, setNumber] = useState(6);
  // console.log(maxProducts);
  function showMore(e) {
    setNumber(number + 6);
  }
  function showLess(e) {
    setNumber(number - 6);
  }
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <br />
      <div className="more">
        <div
          className="cards-show row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4"
          id={props.id}
        >
          {Object.entries(types).map((key, e) => {
            if (e < number) {
              return (
                <ProductCard
                  key={e}
                  img={"/ProductTypeImages/" + props.name + "/" + key[1]}
                  name={types[e]}
                  id={e}
                />
              );
            }
            return;
          })}
        </div>

        <br />

        <section
          className={
            number > 6
              ? "d-flex justify-content-between"
              : "d-flex justify-content-end"
          }
        >
          {number > 6 && (
            <button
              id="showLessBtn"
              onClick={showLess}
              className="btn btn-lg btn-dark"
              style={{ marginRight: "40px" }}
            >
              Show Less
            </button>
          )}
          {number < max && (
            <button
              id="showMoreBtn"
              onClick={showMore}
              className="btn btn-lg btn-danger"
            >
              Show More
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
export default ProductList;

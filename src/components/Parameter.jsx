import { Col, Row } from "react-bootstrap";

function Parameter(props) {
  if (Object.entries(props.arr).length == 0) return;
  return (
    <div className="col-sm-6 col-lg-3" style={{ marginBottom: "40px" }}>
      <Row className="body">
        <h3 className="head" style={{ marginBottom: "20px" }}>
          {props.name}
        </h3>

        {Object.entries(props.arr).map((e) => {
          return <div className="col-lg-6 ">{e}</div>;
        })}
      </Row>
    </div>
  );
}
export default Parameter;

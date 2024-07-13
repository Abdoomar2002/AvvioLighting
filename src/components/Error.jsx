import { Link } from "react-router-dom";

function Error(props) {
  return (
    <center>
      <div>
        <img width={"200px"} src="/imgs/logo.svg" />
        <br />
        <img src="/static/emoji-frown.svg" width="100px" />
        <br />
        <br />
        <h1>{props.code}</h1>
        <br />
        <br />
        <Link href="/" className="btn btn-danger">
          Back to Home
        </Link>
      </div>
    </center>
  );
}
export default Error;

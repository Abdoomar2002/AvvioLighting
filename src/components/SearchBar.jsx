import { useState } from "react";

function SearchBar(props) {
  const [SearchKey, setSearchKey] = useState("");
  function handleChange(e) {
    setSearchKey(e.target.value);
  }
  function handleSubmit(e) {
    let link = document.getElementById("go");
    window.location.replace("/Search/" + SearchKey);
    e.preventDefault();
  }
  return (
    <form
      className="d-flex"
      id={props.SearchId}
      role="search"
      style={props.style}
      onSubmit={handleSubmit}
    >
      <input
        className="form-control me-2 mt-1"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
        required
      />
      <button className="btn btn-outline-light" type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchBar;

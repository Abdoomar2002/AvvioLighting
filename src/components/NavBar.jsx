import Logo from "./Logo";
import NavList from "./NavList";
import CollapseButton from "./CollapseButton";
import SearchBar from "./SearchBar";
import { Collapse } from "react-bootstrap";
import { Navbar as Nav } from "react-bootstrap";
import { useState } from "react";
function NavBar(props) {
  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <header data-bs-theme="dark" onLoad={props.onLoad}>
      <nav className="navbar navbar-expand-md navbar-dark  bg-dark ">
        <div className="container-fluid">
          <Logo />
          <SearchBar SearchId="aftercollapse" style={{ width: "70%" }} />
          <Nav
            expand="xxl"
            expanded={expanded}
            style={{ display: "contents", width: "100%" }}
          >
            <Nav.Toggle
              aria-controls="navbarCollapse"
              onClick={handleNavToggle}
              style={{ marginTop: "-25px" }}
            />
            <Nav.Collapse id="navbarCollapse">
              <NavList
                active={props.active}
                arr={["Home", "About", "Products", "Download", "Contact Us"]}
                links={["/", "/About", "/Products", "/Download", "/ContactUS"]}
                classes={"navbar-nav ms-auto mb-2 mt-md-3"}
              />
            </Nav.Collapse>
          </Nav>
          <SearchBar SearchId="beforecollapse" style={{ marginTop: "-20px" }} />
        </div>
      </nav>
    </header>
  );
}
export default NavBar;

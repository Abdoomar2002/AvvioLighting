import { useState } from "react";
import "./CollapseDarkModeCarousel.css"; // Custom CSS file for dark mode
import { Collapse, Dropdown, Button } from "react-bootstrap";
function ModeButton(props) {
  const [open, setOpen] = useState(false);
  function handleClick(e) {
    console.log(e.target.id);
  }
  /* <button
      className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
      id="bd-theme"
      type="button"
      aria-expanded="false"
      data-bs-toggle="dropdown"
      aria-label="Toggle theme (light)"
      onClick={handleClick}
    >
      <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
        <use href="#sun-fill"></use>
      </svg>
      <span className="visually-hidden" id="bd-theme-text">
        Toggle theme
      </span>
    </button>
    <Collapse in={open}>
      <ul
        className="dropdown-menu dropdown-menu-end shadow"
        aria-labelledby="bd-theme-text"
      >
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center active"
            data-bs-theme-value="light"
            aria-pressed="true"
            id="lightmode"
            onClick={props.toggleDarkMode}
          >
            <svg
              className="bi me-2 opacity-50 theme-icon"
              width="1em"
              height="1em"
            >
              <use href="#sun-fill"></use>
            </svg>
            Light
            <svg className="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            data-bs-theme-value="dark"
            aria-pressed="false"
            onClick={props.toggleDarkMode}
            id="darkmode"
          >
            <svg
              className="bi me-2 opacity-50 theme-icon"
              width="1em"
              height="1em"
            >
              <use href="#moon-stars-fill"></use>
            </svg>
            Dark
            <svg className="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
      </ul>
    </Collapse>
    <Dropdown drop="up">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Open Dropup
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#action-3">Action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     <Button
      onClick={() => setOpen(!open)}
      aria-controls="collapse-content"
      aria-expanded={open}
    >
      Toggle Collapse
    </Button>
    <Collapse in={open}>
      <div id="collapse-content" className="mt-3">
        This content will collapse upwards.
      </div>
    </Collapse>
    */
  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <Dropdown drop="up">
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
            <use href="#sun-fill"></use>
          </svg>
          <span className="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={props.toggleDarkMode} id="lightmode">
            <span>
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#sun-fill"></use>
              </svg>
              Light
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </span>
          </Dropdown.Item>
          <Dropdown.Item onClick={props.toggleDarkMode} id="darkmode">
            <span>
              <svg
                className="bi me-2 opacity-50 theme-icon"
                width="1em"
                height="1em"
              >
                <use href="#moon-stars-fill"></use>
              </svg>
              Dark
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <script src="../src/assest/color.js" />
    </div>
  );
}
export default ModeButton;

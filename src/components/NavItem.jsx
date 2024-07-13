import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <li className={"nav-item " + props.point}>
      <a
        target={!props.link.includes("http") ? "" : "_blank"}
        className={"nav-link  " + props.active + " " + props.footer}
        href={props.link}
      >
        {props.img != null ? (
          <img src={__dirname + "static/" + props.img} />
        ) : null}
        &nbsp;
        {props.Item}
      </a>
    </li>
  );
}
export default NavItem;

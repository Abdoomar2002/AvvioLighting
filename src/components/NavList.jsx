import NavItem from "./NavItem";
let active = "";
let point = "";
let footer = "";
let img = [];
let arr = [];
let links = [];
function NavList(props) {
  arr = props.arr;
  active = props.active;
  point = props.point;
  footer = props.footer;
  img = props.img == null ? [] : props.img;
  links = props.links;
  return (
    <ul className={props.classes} dir="ltr">
      {arr.map((e, index) => {
        if (img.length === 0) return mapArr(e, links[index], null);
        else {
          return mapArr(e, links[index], img[index]);
        }
      })}
    </ul>
  );
}

function mapArr(element, index, image) {
  if (element === active)
    return (
      <NavItem
        key={Math.random()}
        Item={element}
        active="active"
        point={point}
        footer={footer}
        img={image}
        link={index}
      />
    );
  else
    return (
      <NavItem
        key={Math.random()}
        Item={element}
        active=""
        point={point}
        footer={footer}
        img={image}
        link={index}
      />
    );
}
export default NavList;

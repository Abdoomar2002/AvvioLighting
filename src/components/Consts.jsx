import Mode from "./Mode";
import ModeButton from "./ModeButton";
function Consts(props) {
  return (
    <>
      <Mode />
      <ModeButton
        toggleDarkMode={props.toggleDarkMode}
        darkMode={props.darkMode}
      />
    </>
  );
}
export default Consts;

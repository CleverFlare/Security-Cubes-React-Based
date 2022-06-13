import ToggleStyle from "./css modules/toggle.module.css";

const Toggle = ({ onToggle }) => {
  return (
    <input type="checkbox" className={ToggleStyle.toggle} onChange={onToggle} />
  );
};

export default Toggle;

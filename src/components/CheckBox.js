import CheckBoxStyles from "./css modules/checkbox.module.css";

const CheckBox = ({ label, onChange, value }) => {
  return (
    <div className={CheckBoxStyles.checkboxWrapper}>
      <input type="checkbox" onChange={onChange} checked={value} />
      {label && <label>{label}</label>}
    </div>
  );
};

export default CheckBox;

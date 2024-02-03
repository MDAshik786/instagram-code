import { ButtonFieldTypes } from "../Types/commonField";

const ButtonField = ({
  className,
  onClick,
  disabled,
  type,
  children,
}: ButtonFieldTypes) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={disabled ? { backgroundColor: "#5C8374" } : {}}
    >
      {children}
    </button>
  );
};

export default ButtonField;

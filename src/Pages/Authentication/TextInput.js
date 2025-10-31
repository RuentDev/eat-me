import { FONTS } from "../../constants";

const TextInput = ({
  label,
  type = "text",
  icon,
  value,
  onchange,
  placeholder,
  id,
  errorText,
}) => {
  return (
    <>
      <div
        style={{
          borderBottom: "1px solid #f1f1f1",
          margin: "1rem 0",
        }}
      >
        <label htmlFor={id} style={{ ...FONTS.h5 }}>
          {label}
        </label>

        <div
          style={{
            margin: ".5rem 0",
          }}
        >
          {icon}
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            style={{
              border: "none",
              outline: "none",
              width: "90%",
              padding: "0 0 0 1rem",
              ...FONTS.body5,
            }}
            onChange={onchange}
            value={value}
          />
        </div>
      </div>
      <p className="text-danger">{errorText}</p>
    </>
  );
};

export default TextInput;

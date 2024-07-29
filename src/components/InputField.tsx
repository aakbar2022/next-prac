
interface Props {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  classes?: string
  styles?: any
  value: string|number
  handleChange: (e: any) => void
  contClasses?: string
  isRequired?: boolean
  maxLength?: number
}

const InputField = (props: Props) => {
  const { label, type, id, contClasses,isRequired, value, handleChange, placeholder, classes, styles, maxLength } = props;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    handleChange(event.target.value)
  };

  return (
    <div className={`mb-3 ${contClasses}`}>
      <label className="fs-6 pb-1 defultBlackColor" htmlFor={id}>
        {label}
      </label>
      <input
        onChange={handleInputChange}
        type={type}
        value={value}
        required= {isRequired}
        maxLength={maxLength}
        className={`form-control ${classes}`}
        style={{ ...styles, padding: ".7rem .75rem" }}
        id={id}
        name={id}
        placeholder={placeholder}
      />
    </div>
  );
};


export default InputField;

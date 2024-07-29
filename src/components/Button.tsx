interface Props {
  classes?: string;
  styles?: any;
  btnLabel: string;
  onClick?: () => void;
}
function Button(props: Props) {
  const { classes, styles, btnLabel, onClick } = props;

  return (
    <button
      type="button"
      className={`btn ${classes}`}
      style={{
        borderRadius: "2rem",
        fontSize: "14px",
        padding: "0.6rem 1.2rem",
        paddingBottom: "0.5rem",
        ...styles,
      }}
      onClick={onClick}
    >
      {btnLabel}
    </button>
  );
}

export default Button;

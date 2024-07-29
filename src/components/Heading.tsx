interface Props {
  heading: string;
  classes?: string;
  styles?: any;
}

function Heading(props: Props) {
  const { heading, styles, classes } = props;

  return (
    <h2 className={`${classes}`} style={{ fontWeight: 500, ...styles }}>
      {heading}
    </h2>
  );
}

export default Heading;

import { Button } from "react-bootstrap";
interface Props {
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  showSkipBtn?: boolean;
}
function NextPreviousButtons(props: Props) {
  const { handlePreviousStep, showSkipBtn, handleNextStep } = props;

  return (
    <div
      className={`d-flex gap-3 ${showSkipBtn ? "justify-content-between" : "justify-content-end"} align-items-center`}
    >
      {showSkipBtn && (
        <h6
          className="text"
          style={{ cursor: "pointer" }}
          onClick={handleNextStep}
        >
          Skip
        </h6>
      )}
      <div className="d-flex gap-3 testimonial_btn_container">
        <Button variant="" onClick={handlePreviousStep}>
          Previous
        </Button>
        <Button
          variant="outline-dark"
          style={{
            borderRadius: 20,
            background: "black",
            color: "white",
            padding: "0 20px",
          }}
          
          onClick={handleNextStep}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default NextPreviousButtons;

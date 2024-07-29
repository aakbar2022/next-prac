import { CongratulationsIcon } from "@/assets/images";

interface Props {
    handleNextStep: () => void;
}
function Congratulations(props: Props) {
    const { handleNextStep } = props;
    return (
        <div className="container p-5 m-5 ">
            <div className="row ">
                <div className="col ">
                    <div className="row">
                        <div className="col">
                            <div className="" style={{}}>
                                <div
                                    className="container d-flex justify-content-center align-items-center"
                                    style={{ width: "50%" }}
                                >
                                    <div className="row">
                                        <div className="col-12 text-center ">
                                            <div className=" d-flex justify-content-center align-items-center" >
                                                <CongratulationsIcon />
                                            </div>
                                            <h2>Congratulations, your request is submitted.</h2>
                                            {/* <h6>
                                                Request Number is.</h6> */}
                                            <div className="text-secondary" style={{ fontSize: ".9rem" }}>
                                                We will contact you soon for further proccedings
                                            </div>
                                            <div
                                                onClick={handleNextStep}
                                                className="btn btn-success black m-2 py-2"
                                                style={{ borderRadius: 50, width: 120 }}
                                            >
                                                Close
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Congratulations;

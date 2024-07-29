
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../services/gqlQuries";
import InputField from "./InputField";

interface Props {
    handleNextStep: () => void;
    handleCloseStep: () => void;
    handlePreviousStep: () => void;
    currentStep: number;
    requestData: RequestData;
    setRequestData: (data: RequestData) => void
}
function LeaveRequest(props: Props) {
    const { handleNextStep, requestData, setRequestData } = props;
    const { handleCloseStep } = props;
    const [addUserQuery, { loading, error }] = useMutation(ADD_USER);
    const { email, firstName, phoneNumber, queryDetail, surname } = requestData.requestInput
    const handleInputChange = (fieldName: string, value: string) => {

        setRequestData({
            ...requestData,
            requestInput: {
                ...requestData.requestInput,
                [fieldName]: value
            }
        });
    };
    const handleCreate = async (e:any) => {
        e.preventDefault()
        if (email.length < 5 || phoneNumber.length < 9 || firstName.length < 1 || surname.length < 1) return
        try {
            const { data } = await addUserQuery({
                variables: requestData,
            });
            if (data) {
                handleNextStep()
            }
        } catch (error) {
            console.error('Error creating landlord:', error);
        }
    };
    return (

        <div className="container">
            <div className="">
                <div className="mt-2">
                    <div className=" mb-4" style={{ marginTop: "2.3rem" }}>
                        <h2 className="pb-0 fw-normal">Leave a request</h2>
                        <p className="text-secondary">
                        Submit any questions or requests you have in this section. Whether you need assistance, have concerns, or require additional information, we are here to help.
                        </p>
                        <form id="myForm" onSubmit={(e:any) => e.preventDefault()}>
                            <div className="mt-4 row align-items-center">
                                <div className="col-12 col-md-6 mb-2">
                                    <InputField
                                        isRequired={true}
                                        label="First Name"
                                        type="text"
                                        id="firstName"
                                        maxLength={30}
                                        placeholder="Enter first name"
                                        value={firstName}
                                        styles={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
                                        handleChange={(value: any) => handleInputChange('firstName', value)}
                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-2">
                                    <InputField
                                        isRequired={true}
                                        label="Surname"
                                        type="text"
                                        id="surname"
                                        maxLength={30}
                                        placeholder="Enter surname"
                                        value={surname}
                                        styles={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
                                        handleChange={(value: any) => handleInputChange('surname', value)}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mt-0">
                                <div className="col-12 col-md-6 mb-2">
                                    <InputField
                                        isRequired={true}
                                        label="Email"
                                        type="email"
                                        id="email"
                                        maxLength={45}
                                        placeholder="Enter email"
                                        value={email}
                                        styles={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
                                        handleChange={(value: any) => handleInputChange('email', value)}

                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-2">
                                    <InputField
                                        isRequired={true}
                                        label="Phone Number"
                                        type="tel"
                                        id="phoneNumber"
                                        maxLength={16}
                                        placeholder="Enter phone number"
                                        value={phoneNumber}
                                        styles={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
                                        handleChange={(value: any) => handleInputChange('phoneNumber', value)}
                                    />
                                </div>

                            </div>
                            <label className="fs-6 pb-2 defultBlackColor" >
                                Query Detail
                            </label>
                            <textarea
                                className="form-control"
                                placeholder="Write your description here..."
                                maxLength={1500}
                                style={{ minHeight: "calc(3em + 3.25rem + 2px)", border: "1px solid rgba(0, 0, 0, 0.2)" }}
                                value={requestData.requestInput.queryDetail}
                                onChange={(e) => handleInputChange('queryDetail', e.target.value)}
                            />
                            <div className="col-12 text-end  mt-2">
                                max 1500 words
                            </div>
                            <div className="d-flex justify-content-end">
                                <div className={`d-flex gap-3 justify-content-${error ? "between" : "end"}`}>
                                    {error && <div className="text-danger">Submission error ${error.message}</div>}
                                    <button
                                        type="submit"
                                        className="btn btn-outline-dark mt-3"
                                        style={{ borderRadius: 50, width: 100 }}
                                        onClick={(e) => handleCloseStep()}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-dark mt-3 next-btn"
                                        style={{ borderRadius: 50, width: 100 }}
                                        onClick={(e) => handleCreate(e)}
                                    >
                                        Submit
                                    </button>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaveRequest;

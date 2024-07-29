import { LANDLORD_LEGEL } from "@/services";
import { CustomSpinner } from "@/src/components";
import { useMutation } from "@apollo/client";
import NextPreviousButtons from "./NextPreviousButtons";

interface Props {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  setLegalDetails: (data: LegelDetails) => void
  legalDetails: LegelDetails
}

function Step5({ handleNextStep, handlePreviousStep, legalDetails, setLegalDetails }: Props) {
  const [updateLandlordLegal, { loading, error }] = useMutation(LANDLORD_LEGEL);

  const addDiv = () => {
    if (legalDetails.legal.leaseDuration < 10) {
      setLegalDetails({
        ...legalDetails,
        legal: {
          leaseDuration: legalDetails.legal.leaseDuration + 1
        }
      })
    }
  };

  const removeDiv = () => {
    if (legalDetails.legal.leaseDuration > 2) {
      setLegalDetails({
        ...legalDetails,
        legal: {
          leaseDuration: legalDetails.legal.leaseDuration - 1
        }
      })
    }
  };
  const handleCreate = async () => {
    
    try {
      const { data } = await updateLandlordLegal({
        variables: legalDetails,
      });
      if (data) {
        handleNextStep()
      }
    } catch (error) {
      console.error('Error creating landlord:', error);
    }
  };
  return (
    <>
      {loading && <div style={{ position: 'absolute', top: '40%', left: '60%', zIndex: '1000' }}><CustomSpinner /></div>}

      <div className="container">
        <div className="p-2 mt-3" style={{ width: "100%" }}>
          <h2 className="fw-normal mb-1 mt-3">Read legals carefully</h2>
          <p className="subTextColor mb-4">
          Ensure you understand the terms and conditions before proceeding. 
          Your cooperation is essential for a smooth property evaluation and rental process.
           If you have any concerns, please skip this step
          </p>
          <ul style={{ paddingLeft: "13px" }}>
            <li>
            As the landlord, I hereby agree to submit the property for evaluation by MyHousingOptions.
             By completing and submitting this form, I grant permission for representatives of 
             MyHousingOptions to visit and assess the property for its suitability to be listed and
              rented out as separate rooms on their website. The assessment will include an inspection
               of the premises, verification of property details, and discussions regarding potential lease
                terms. The landlord agrees to provide access to all areas of the property
                 and any necessary documentation to facilitate a thorough evaluation.
            </li>
            <br />
            <li>
            Upon successful assessment and mutual agreement, the property will be listed on the MyHousingOptions website.
             The lease terms will be determined based on market conditions and mutual agreement between the landlord and MyHousingOptions. 
             The landlord is responsible for ensuring that the property complies with all applicable laws and regulations,
              including safety and health standards. Any necessary repairs or upgrades identified during the assessment must be completed before listing.
               The landlord also agrees to provide ongoing maintenance and address any issues reported by tenants during the lease period.
            </li>
          </ul>
          <div className="row mt-5">
            <div className="col-md-9">
              <h6>Select year of lease?</h6>
              <label className="subTextColor">
                You can select 2 upto 10 years of lease.
              </label>
            </div>
            <div className="col-md-3 d-flex gap-3 justify-content-end align-items-center">
              <button
                onClick={removeDiv}
                type="button"
                className="btn btn-outline-dark rounded-circle m-1"
                style={{ width: 37 }}
              >
                -
              </button>
              <h6 className="mt-2 mx-1">{legalDetails.legal.leaseDuration}</h6>
              <button
                onClick={addDiv}
                type="button"
                className="btn btn-outline-dark rounded-circle m-1"
                style={{ width: 36 }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {error && <div>Submission error ${error.message}</div>}

        <div className="" style={{ marginRight:"10px",marginLeft:"10px"}}>
        <NextPreviousButtons
          showSkipBtn={true}
          handleNextStep={handleCreate}
          handlePreviousStep={handlePreviousStep}
        />
        </div>
      </div>
    </>
  );
}

export default Step5;

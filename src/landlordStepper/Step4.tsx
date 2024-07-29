import { EditIcon } from "@/assets/images";
import { LANDLORD_RENT_EXPECTATION } from "@/services";
import { CustomSpinner } from "@/src/components";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import NextPreviousButtons from "./NextPreviousButtons";

interface Props {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  setRentExpectation: (data: any) => void
  rentExpectation: any
}
function Step4({ handleNextStep, handlePreviousStep, setRentExpectation, rentExpectation }: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  // const [price, setPrice] = useState<number>(400);
  const [updateLandlordRentExpectations, { loading, error }] = useMutation(LANDLORD_RENT_EXPECTATION);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleCreate = async () => {
    
    try {
      const { data } = await updateLandlordRentExpectations({
        variables: rentExpectation,
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
      <div className="position-relative container pt-0 h-100 d-flex flex-column align-items-center mt-4">
        <div className="price_container mt-2">
          <h2 className="fw-normal">Now set your price</h2>
          <p className="subTextColor">
            Please specify your desired rent amount per month. Consider factors
            such as location, amenities, and current market rates to determine a
            competitive and attractive price
          </p>
        </div>

        <div className="landlord_step4_price_container">
          <div className="input-group input-group-lg">
            {isEdit ? (
              <>
                <span className="input-group-text">£</span>
                <input
                  type="number"
                  className="form-control landlord_price_input"
                  aria-label="price"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Rent expectation"
                  value={rentExpectation.price}
                  onChange={(e: any) => setRentExpectation({
                    ...rentExpectation,
                    price: e.target.value
                  })}
                />
              </>
            ) : (
              <div>
                <label style={{ fontSize: 96, fontStyle: "normal" }}>
                  £{rentExpectation.price}
                </label>
                <h6 className="mt-4 text-center">Set your rent expectation</h6>
              </div>
            )}
            <button
              className={`btn ${isEdit ? " btn-outline-secondary" : ""}`}
              type="button"
              id="button-addon1"
              onClick={handleEdit}
            >
              {isEdit ? "Save" : <EditIcon />}
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3 align-items-center justify-content-center"
      
       style={{ marginRight:"20px",marginLeft:"10px"}}>
      
        <NextPreviousButtons
          handleNextStep={handleCreate}
          handlePreviousStep={handlePreviousStep}
        />
      </div>
    </>
  );
}

export default Step4;

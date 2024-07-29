import { UPDATE_LANDLORD_PROPERTY_INFO } from "@/services";
import { CustomSpinner, InputField } from "@/src/components";
import { useMutation } from "@apollo/client";
import NextPreviousButtons1 from "./NextPreviousButtons";
import RoomTypeCard1 from "./RoomTypeCard";
enum RoomType {
  SelfContained = 'Self_Contained',
  Regular = 'Regular',
}
interface Props {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  propertyDetailData: PropertyDetailData
  setPropertyDetailData: (data: PropertyDetailData) => void
}
function Step2(props: Props) {
  const { handleNextStep, handlePreviousStep, propertyDetailData, setPropertyDetailData } = props;
  const [updateLandlordPropertyInfo, { loading, error }] = useMutation(UPDATE_LANDLORD_PROPERTY_INFO);

  const addDiv = () => {
    if (propertyDetailData.propertyInfo.bedrooms < 20) {
      setPropertyDetailData({
        ...propertyDetailData,
        propertyInfo: {
          ...propertyDetailData.propertyInfo,
          bedrooms: propertyDetailData.propertyInfo.bedrooms + 1,
          rooms: [...propertyDetailData.propertyInfo.rooms, { size: 0, type: RoomType.SelfContained }]
        }
      });
    }
  };

  const removeDiv = () => {
    if (propertyDetailData.propertyInfo.bedrooms > 1) {
      setPropertyDetailData({
        ...propertyDetailData,
        propertyInfo: {
          ...propertyDetailData.propertyInfo,
          bedrooms: propertyDetailData.propertyInfo.bedrooms - 1,
          rooms: propertyDetailData.propertyInfo.rooms.slice(0, -1)
        }
      });
    }
  };
  const handleChange = (value: any) => {
    setPropertyDetailData({
      ...propertyDetailData,
      propertyInfo: {
        ...propertyDetailData.propertyInfo,
        address: value
      }
    });
  }

  const handleCreate = async () => {
   
    try {
      const { data } = await updateLandlordPropertyInfo({
        variables: propertyDetailData,
      });
      if (data) {
        handleNextStep()
      }
    } catch (error) {
      console.error('Error creating landlord:', error);
    }
  };

  return (<> 
      {loading && <div style={{ position: 'absolute', top: '40%', left: '60%', zIndex: '1000' }}><CustomSpinner /></div>}
  
   <div className="container mt-4">
    <h2 className="mt-2">Next, let’s describe your property information</h2>
    <p className="subTextColor mb-3">
      Provide detailed information about your property to help us create an
      accurate and compelling listing
    </p>
    <InputField
      handleChange={handleChange}
      value={propertyDetailData.propertyInfo.address}
      label="Address"
      type="text"
      id="Address"
      placeholder="Enter address"
    />
    <div className="row align-items-center mt-3">
      <div className="col-md-9 mt-2">
        <h4 className="fs-6">How many bedrooms do you have?</h4>
      </div>
      <div className="col-md-3 d-flex gap-2 justify-content-end align-items-center">
        <button
          onClick={removeDiv}
          type="button"
          className="btn btn-outline-dark rounded-circle m-1"
          style={{ width: 37 }}
          id="decreaseRoom"
        >
          -
        </button>
        <h6 className="mt-3 mx-1 fs-5" id="roomCount">
          {propertyDetailData.propertyInfo.bedrooms}
        </h6>
        <button
          onClick={addDiv}
          type="button"
          className="btn btn-outline-dark rounded-circle m-1"
          style={{ width: 37 }}
          id="increaseRoom"
        >
          +
        </button>
      </div>
    </div>
    <div
      style={{
        maxHeight: "295px",
        overflow: "auto",
        minHeight: "180px",
        marginTop: ".5rem",
      }}
    >

      {
        propertyDetailData.propertyInfo.rooms.length > 0 ?
          propertyDetailData.propertyInfo.rooms.map((room, index) => <RoomTypeCard1 key={index} room={room}
            propertyDetailData={propertyDetailData}
            roomNumber={index}
            setPropertyDetailData={setPropertyDetailData} />
          ) : <></>
      }
    </div>
  </div>
    <div  className={`d-flex justify-content-${error ? "between" : "end"}`}>
    {error && <div className="text-danger">Submission error ${error.message}</div>}
    <div className="
    " style={{ marginRight:"14px"}}>
      <NextPreviousButtons1
        handlePreviousStep={handlePreviousStep}
        handleNextStep={handleCreate}
      />
    </div>
      
    </div>
  </>

  );
}

export default Step2;

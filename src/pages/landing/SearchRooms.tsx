import { HomeIcon, Step1Arrow, Step2Arrow, Step3Arrow, NavigationIcon, PageIcon, HandIcon, NoteIcon } from "@/assets/images";
import StepsCard from "@/src/components/StepsCard";

const data = [
  {
    title: "Step 1",
    description: "Based on the Local Authority you are in we will educate you on your housing options. You will be able to do more like produce letters directly to your council but that wont be until October 2024.",
    icon: <NavigationIcon />,
  },
  {
    title: "Step 2",
    description: "You will be able to browse all the listings in your local authority - every single room we post is benefit sustainalbe which means the landlord will accept benefits and all you will have to pay is £80 per month. ",
    icon: <PageIcon />,
  },
  {
    title: "Step 3",
    description: "Apply - if you like the room - you can apply for everything online and get a tentative decision within the space of 15-20 minutes.",
    icon: <HandIcon />,
  },
  {
    title: "Step 4",
    description: "The first beta version will allow landlords to work with us - you can upload your property within the space of 10-15 minutes. Thats it! sit back and watch your guranteed rent come in.",
    icon: <NoteIcon />,
  },
];
function SearchRooms() {
  return (
    <div className="py-2" style={{ background: "#D1DBFF" }}>
      <div className="container ">
        <div
          className="w-100"
          style={{ marginTop: "5vw", marginBottom: "4vw" }}
        >
          <h1 className="text-center heading_sec3">
            How can the toolkit help me?
            <HomeIcon color="white" classes="search_home_icon" />
          </h1>
        </div>
        <div className="container toolkit_parent_div">
          <div className="d-flex toolkit_row_container mt-1 position-relative justify-content-between">
            <div className="toolkit_item_container">
              <StepsCard data={data[0]} />
            </div>

            <div className="toolkit_step1_arrow position-absolute">
              <Step1Arrow classes="" />
            </div>

            <div className="toolkit_item_container toolkit_item2_style">
              <StepsCard data={data[1]} />
            </div>

            <div className="toolkit_step2_arrow position-absolute">
              <Step2Arrow classes="" />
            </div>
          </div>

          <div className="d-flex toolkit_row2_container position-relative justify-content-between">
            <div className="toolkit_item_container">
              <StepsCard data={data[2]} />
            </div>

            <div className="toolkit_step1_arrow position-absolute">
              <Step3Arrow classes="" />
            </div>

            <div className="toolkit_item_container toolkit_item2_style">
              <StepsCard data={data[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchRooms;

import { Search } from "@/src/components";

function LandingPage() {
  return (
    <div className="text-center primaryBgColor mt-5">
      <div
        className="container main_heading d-flex align-items-center flex-column justify-content-center"
        style={{ padding: "1vw 2.67vw" }}
      >
        <div className="position-relative d-flex align-items-center">
          <h1 className="fw-normal main_heading_text">Explore the toolkit</h1>
          <span className="bg-white defaultColor betaStyle">BETA</span>
        </div>
        <div className="search_container subTextColor heading_desc_container">
          <h5 className="fw-normal sub_heading_text">
            Our toolkit helps you understand your housing options and sources
            the cheapest bedrooms in your area
          </h5>
        </div>
        <div className="search_container" style={{ background: "#FFFFFF" }}>
          <Search
            styles={{ border: "#FFFFFF" }}
            Contaiinerstyles={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
            label="Search"
            placeholder="Enter your local authority"
            onInputChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

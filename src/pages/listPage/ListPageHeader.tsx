import { FilterIcon, SortIcon } from "@/assets/images";
import { Search } from "@/src/components";

function ListPageHeader({datafound}:{datafound:boolean}) {
  return (
    <>
      <div className="text-center primaryBgColor mt-5">
        <div className="container">
          <div className="main_list_page_heading d-flex align-items-center">
            <div className="position-relative text-start">
              <h1 className="fw-normal main_heading_text">
                Find rooms on <br />
                rent with us{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="search_container"
        style={{
          background: "#FFFFFF",
          margin: "0 auto",
          marginTop: "-2.7rem",
          marginBottom: "1rem",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
      >
        <Search
          styles={{
            border: "#FFFFFF",
          }}
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
      {datafound&&<div className="container">
        <div className="filter_container mb-2 mt-5 w-100 d-flex justify-content-between align-items-center">
          <h1 className="fw-normal rent_text m-0">Rent</h1>
          <div className="side_filter d-flex align-items-center gap-4">
            <SortIcon />
            <button
              type="button"
              className="btn btn-outline-dark d-flex gap-2 align-items-center "
              style={{
                color: " rgba(0, 0, 0, 0.4)",
                borderColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <FilterIcon /> Filter
            </button>
          </div>
        </div>
      </div>}
    </>
  );
}

export default ListPageHeader;

import { HomeIcon } from "@/assets/images";
import { Button } from "react-bootstrap";
import Carousel from "./Carousel";

function Testimonials() {
  return (
    <div className="py-6" style={{ background: "#F2F2F2" }}>
      <div className="container ">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="testimonial_heading_container">
            <h2 className="testimonial_heading">
              See what our clients and landlords say about us <HomeIcon />
            </h2>
          </div>
          <div className="d-flex gap-3 testimonial_btn_container">
            <Button
              variant="outline-dark"
              style={{
                borderRadius: 20,
                background: "black",
                color: "white",
                padding: "0 20px",
              }}
            >
              Client
            </Button>
            <Button variant="">Landloard</Button>
          </div>
        </div>
        <div className="container">
          <Carousel/>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

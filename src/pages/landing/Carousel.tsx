import { LeftArrowIcon, RightArrowIcon } from "@/assets/images";
import { useRef } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";

function Carousel() {
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container" style={{ marginTop: "1rem" }}>
      <Slider
        {...settings}
        ref={(slider: any) => {
          sliderRef = slider;
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div key={item}>
            <Card
              className="p-3 border-white"
              style={{
                borderRadius: "22px",
                background: "white",
                marginRight: "1rem",
              }}
            >
              <Card.Title>Name {item}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Designation
              </Card.Subtitle>
              <Card.Text>
                “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad orem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad”
              </Card.Text>
            </Card>
          </div>
        ))}
      </Slider>
      <div className="slider_btn_container" style={{ textAlign: "end", marginTop: ".5rem", marginRight: "1rem" }}>
        <button className="button btn" type="button" onClick={previous}>
          <LeftArrowIcon />
        </button>
        <button className="button btn" type="button" onClick={next}>
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
}

export default Carousel;

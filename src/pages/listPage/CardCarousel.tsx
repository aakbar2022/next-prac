import { FavIcon, PropertyImg } from "@/assets/images";
import Image from "next/image";
import Slider from "react-slick";
function CardCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    appendDots: (dots: any) => (
      <div className="slick-dots2">
        <ul style={{ margin: "0px", bottom: "10px" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="slider position-relative"
            style={{ width: "100%", height: "100%" }}
          >
            <div className="position-absolute" style={{ right: "12px", top: "12px" }}>
              <FavIcon />
            </div>
            <Image
              src={PropertyImg}
              alt="Landlords"
              style={{ minHeight: "233px" }}
              className="property_img img-fluid h-100"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardCarousel;

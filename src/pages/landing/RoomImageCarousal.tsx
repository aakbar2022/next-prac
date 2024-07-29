import Image from "next/image";
import Slider from "react-slick";

interface Props {
    styles?: any;
    data: any[];
}

function RoomImageCarousal(props: Props) {
    const { styles, data } = props;

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2200,
        nextArrow: <></>,
        prevArrow: <></>,

    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data&&data.map((item) => (
                    <div
                        key={item.counter}
                        className="slider position-relative"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <Image
                            src={item.img}
                            alt="Landlords"
                            style={{ ...styles }}
                            className=""
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default RoomImageCarousal;

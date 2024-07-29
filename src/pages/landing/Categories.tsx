import { HomeIcon, image1, RightArrowIconWhite, image2, detailImg1, RoomImg, FavIcon } from "@/assets/images";
import Image from "next/image";
import { Button } from "@/src/components";
import RoomImageCarousal from "./RoomImageCarousal";
const data = [
  {
    counter: "01",
    img: image1,
    title: "Categories title 1",
  },
  {
    counter: "02",
    img: image2,
    title: "Categories title 2",
  },
  {
    counter: "03",
    img: detailImg1,
    title: "Categories title 3",
  },
  {
    counter: "04",
    img: RoomImg,
    title: "Categories title 4",
  },
];

function Categories() {
  return (
    <div className="container p-2 cat_container">
      <div className="d-flex justify-content-center">
        <h1
          className="text-center heading_sec2">
          Rooms available <br /> today{" "}
          <HomeIcon />
        </h1>
      </div>
      <div className="container d-flex gap-3 flex-wrap" style={{justifyContent: "space-between !important", paddingLeft: "3.5px", paddingRight: "3.px"}}>
        {data.map((item) => (
          <div className="image-container" key={item.counter}>
            {/* <div className="position-absolute top-0 start-0 text-red ">
              <h2 className="counter text-white">
                {item.counter}
              </h2>
            </div> */}

            {/* //Following image tag is for static image */}
            {/* <Image
              src={item.img}
              alt="Landlords"
              className=""
              style={{height: 'inherit', objectFit: 'cover', width: '100%'}}
            /> */}

            {/* //Following RoomImageCarousal tag is for carousel images */}
            <RoomImageCarousal
              styles={{ height: '260px', objectFit: 'cover', width: '100%' }}
              data={data} />

            <div className="hover-overlay d-flex justify-content-center align-items-center w-95">
              <Button
                btnLabel="Apply Now"
                onClick={() => { }}
                styles={{ fontWeight: 600 }}
              />
            </div>
            {/* <div className="position-absolute" style={{ right: "15px", top: "12px" }}>
              <FavIcon />
            </div> */}
            <div className="title position-absolute bottom-0 start-0 end-0 text-white d-flex justify-content-between align-items-center">
              <h2 className="counter text-white mb-0">
                {item.title}
              </h2>
              <button className="button btn cat_next_button" type="button">
                <RightArrowIconWhite />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

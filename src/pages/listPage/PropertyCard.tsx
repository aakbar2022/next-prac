import { CircleArrowIcon } from "@/assets/images";
import Link from "next/link";
import CardCarousel from "./CardCarousel";
interface Props {
  title: string;
  description: string;
  price: string;
  _id: string;
}
function PropertyCard(props: Props) {
  const { title, description, price, _id } = props;
  return (
    <div className="col-md-6 col-sm-12">
      <div
        className="card w-100 h-100"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.4)",
          borderRadius: "16px",
          minHeight: "225px",
        }}
      >
        <div className="d-flex flex-wrap">
          <div className="carousel card_carousel">
            <CardCarousel />
          </div>
          <div className="card_content p-1 d-flex flex-column">
            <div
              className="card-body"
              style={{
                padding: "8px 10px 0px 10px",
              }}
            >
              <div className="d-flex justify-content-between mt-2">
                <h5 className="card-title card_price">€450</h5>
                <h5
                  role="button"
                  className="card_status d-flex align-items-start gap-2"
                >
                  <span className="dot"></span>
                  Available
                </h5>
              </div>

              <h6 className="card-title room_title">{title}</h6>
              <p className="card-text room_desc elipseL3">{description}</p>
              {/* <h5 className="d-flex align-items-start gap-2 card_fav">
                <FavIcon /> 5
              </h5> */}
            </div>
            <div
              role="button"
              className="link text-end"
              style={{
                marginBottom: "10px",
                marginRight: "15px",
              }}
            >
              <Link href={"listPage/" + _id}>
                <CircleArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

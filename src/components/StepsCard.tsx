import { BuildingImg } from "@/assets/images";
import Image from "next/image";
import { Card } from "react-bootstrap";

interface CardData {
  title: string;
  description: string;
  icon: any;
}
interface Props {
  styles?: any;
  data:CardData
}
function StepCard(props: Props) {
  const { data: { title, description, icon } } = props;
  return (
    <Card
      className="col-sm-12 flex-row-reverse justify-content-center align-items-center justify-content-sm-end py-3 px-3"
      style={{
        // maxWidth: "569px",
        background: "#FFFFFF",
        borderRadius: "22px",
        filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25))",
      }}
    >
      <div className="search_card_img">
        <Image
          src={BuildingImg}
          alt="Landlords"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <Card.Body style={{ width: "30vw" }}>
        {icon}
        <Card.Title className="search_card_title">{title}</Card.Title>
        <Card.Text className="search_card_desc" style={{textAlign: 'justify'}}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StepCard;

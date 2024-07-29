import { CarIcon } from "@/assets/images";
interface Props {
  title: string;
  feature: string;
  featureDes: string;
}
function DetailFeatureCard() {
  return (
    <div className="d-flex align-items-center gap-3 py-1">
      <CarIcon />
      <div>
        <h6 className="fw-normal mb-1">Feature 1 </h6>
        <p className="card-text room_desc">Small description will go here</p>
      </div>
    </div>
  );
}

export default DetailFeatureCard;

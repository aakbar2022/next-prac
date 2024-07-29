import { detailImg1, detailImg2, detailImg3 } from "@/assets/images";
import { Button, CModal, Navbar } from "@/src/components";
import Layout from "@/src/components/Layout";
import { useOpenCloseModal } from "@/src/hooks";
import Image from "next/image";
import { useState } from "react";
import DetailFeatureCard from "../../../components/DetailFeatureCard";
import ImagePhotoViewer from "../../../components/ImagePhotoViewer";
import Stepper from "../../../RoomReqStepper/Stepper";
const data = [
  { imgUrl: detailImg1 },
  { imgUrl: detailImg2 },
  { imgUrl: detailImg3 },
  { imgUrl: detailImg3 },
  { imgUrl: detailImg3 },
];
function ListDetailPage() {
  const { closeModal, isOpen, openModal } = useOpenCloseModal();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSteperModal, setShowSteperModal] = useState(false);
  const openSteperModal = () => setShowSteperModal(true);
  const closeSteperModal = () => setShowSteperModal(false);

  const handleClose = () => {
    setCurrentImageIndex(0);
    closeModal();
  };

  return (
    <Layout>
      <Navbar />
      <div className="page">
        <main>
          <div className="primaryBgColor">
            <div className="container mt-6 detail_header_container">

              <div className="d-flex flex-wrap main_all_imgs_container">
                <div className="main_img_container">
                  <Image
                    onClick={() => {
                      setCurrentImageIndex(0);
                      openModal();
                    }}
                    src={data[0].imgUrl}
                    alt="Landlords"
                    className={`main_img_item`}
                    style={{ cursor: "pointer", height: "inherit", filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))" }}
                  />
                </div>
                <div className="other_imgs_container">
                  <div className="other_imgs_internal_container">
                    {data.map((item, index) => {
                      return (
                        <>
                          {index !== 0 && (
                            <div
                              key={index}
                              className={`small_img_container`}
                              style={{
                                cursor: "pointer",
                                filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
                              }}
                            >
                              <Image
                                onClick={() => {
                                  setCurrentImageIndex(index);
                                  openModal();
                                }}
                                src={item.imgUrl}
                                alt="Landlords"
                                className="img-fluid small_img_item"
                              />
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-start flex-wrap mt-4 pt-1">
                <div className="detail_heading_container">
                  <h1 className="fw-normal defaultColor mb-3 detail_view_price"
                    style={{ marginTop: "-3px" }}
                  >€450/night </h1>
                  <h3 className="fw-normal defaultColor detail_view_title">Room title will be displayed over here</h3>
                  <h6 className="card-text room_desc detail_view_desc">
                    124 High St, Peterborough PE2 8DP
                  </h6>
                  <div
                    style={{ width: "110px", height: "34px" }}
                    role="button"
                    className="defaultColor card_status"
                  >
                    <span className="dot"></span> Available
                  </div>
                </div>
                <div className="d-flex flex-wrap apply_container">
                  <div className="d-flex flex-column gap-3 align-items-center">
                    <h6 className="property_id mb-0">ID: 1234</h6>
                    <h6 className="ft fw-bold mb-0" style={{ fontSize: ".98rem" }}>
                      6750 <span className="fw-normal text-muted">sqft</span>
                    </h6>
                  </div>
                  <div
                    className="bg-white p-4"
                    style={{ borderRadius: 20 }}
                  >
                    <Button
                      btnLabel="Apply Now"
                      onClick={openSteperModal}
                      classes="btn-dark"
                      styles={{ width: 200 }}
                    />
                    <CModal
                      showModal={showSteperModal}
                      title="Room request"
                      closeModal={closeSteperModal}
                      showFooter={false}
                    >
                      <Stepper roomId="" />
                    </CModal>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="container mt-0 detail_body_container">

            <div className="d-flex flex-column mt-0 about_room">
              <h4>About room </h4>
              <p
                className="card-text"
                style={{
                  color: "#575757",
                  textAlign: "justify",
                  fontWeight: 400,
                  fontSize: "15px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim adLorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat.
              </p>
            </div>
            <div className="detail_feature mt-4 mb-4">
              <h4 className="mb-3">Features</h4>
              {[1, 2, 3, 4].map((item, index) => (
                <DetailFeatureCard key={index} />
              ))}
            </div>
            <div className="detail_feature mt-35 mb-4">
              <h4 className="mb-3">Amenities</h4>
              {[1, 2, 3, 4].map((item, index) => (
                <DetailFeatureCard key={index} />
              ))}
            </div>
          </div>
        </main>
      </div>
      {isOpen && (
        <ImagePhotoViewer
          imgs={[
            "https://react-photo-view.vercel.app/_next/static/media/3.70695fb9.jpg",
            "https://react-photo-view.vercel.app/_next/static/media/2.b43f1ead.jpg",
            "https://react-photo-view.vercel.app/_next/static/media/2.b43f1ead.jpg",
          ]}
          currImg={0}
          isOpen={isOpen}
          onClose={handleClose}
        />
      )}
    </Layout>
  );
}

export default ListDetailPage;

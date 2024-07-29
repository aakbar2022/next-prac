import { FBIcon, InstaIcon, LinkedInIcon, TwiterIcon } from "@/assets/images";
import { Button, RequestModal } from "@/src/components";
import { useOpenCloseModal } from "@/src/hooks";
import { Route } from "next";
import Link from "next/link";
import RequestStepper from "../../components/RequestStepper";
function Footer() {
  const { closeModal, isOpen, openModal } = useOpenCloseModal();
  // const router = useRouter();
  // const changeTo = router.locale === "en" ? "de" : "en";
  // const { t } = useTranslation("common");
  return (
    <footer className="footer pt-5 pb-3">
      <div className="container">
        <div className="d-flex justify-content-center flex-wrap footer_container">
          <div className="col-md-5 col-sm-12">
            <Link href={"/"} className="text-decoration-none">
              <h1 className="logo_heading" style={{ marginBottom: ".8rem" }}>
                My Housing Options
              </h1>
            </Link>
            <div className="d-flex gap-2 my-3">
              <FBIcon />
              <TwiterIcon />
              <InstaIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className="pt-2 col-md-7 col-sm-12 d-flex gap-4 flex-wrap justify-content-between footer_link_container">
            <div className=" text-start">
              <h4 className="footer_title">Services</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="">Rent</a>
                </li>
                <li>
                  <a href="">Rent Out</a>
                </li>
              </ul>
            </div>
            <div className="text-start">
              <h4 className="footer_title">Company</h4>
              <ul className="list-unstyled">
                <li>
                  <Link href={"/aboutus" as Route}>About Us</Link>
                </li>
                <li>
                  <a href="">Reviews</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="text-start pb-0">
              <h4 className="footer_title">Support Center</h4>
              <h5 className="footer_contact">
                <a href="tel:+7675 7868 89798">+7675 7868 89798 </a>
              </h5>
              <Button
                btnLabel="Leave a request"
                onClick={openModal}
                classes="btn-dark"
                styles={{}}
              />
            </div>
          </div>
        </div>
        <div
          className="sap"
          style={{ borderTop: "1px solid #CBCBCB", marginTop: "3rem" }}
        />
        <div className="text-start mt-3 ">
          <p>Copyright © 2024 Myhousingoptions.co.uk</p>
        </div>
      </div>
      <RequestModal
        showModal={isOpen}
        closeModal={closeModal}
        title="Request Form"
        showFooter={false}
      >
        <RequestStepper closeModal={closeModal} />
      </RequestModal>
    </footer>
  );
}

export default Footer;

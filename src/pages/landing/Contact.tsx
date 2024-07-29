import { contactPerson, HomeIcon } from "@/assets/images";
import { Button } from "@/src/components";
import Image from "next/image";

function Contact() {
    return (
        <div className="py-5" style={{ background: "#D1DBFF" }}>
            <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <div className="contact-text">
                    <div
                        style={{ marginTop: "0vw", marginBottom: "0vw" }}
                    >
                        <h1 className="text-start heading_sec3_contact">
                            Still Confused?
                            <HomeIcon color="white" classes="search_home_icon" />
                        </h1>
                    </div>
                    <h5 className="fw-normal sub_heading_text subTextColor my-3">
                        Enter email or phone number to get information about our website. Our team will contact you within 24 hours
                    </h5>
                    <div className="d-flex align-items-center gap-2 mt-4">
                        <input type="text" style={{fontSize: "14px"}} className="form-control contact_input_field" placeholder="Enter email or phone number" />
                        <Button
                            btnLabel="Submit"
                            onClick={() => { }}
                            classes="btn-dark"
                            styles={{}}
                        />
                    </div>
                </div>
                <div className="contact-image">
                    <Image src={contactPerson} alt="Contact" width={400} height={300} className="img-fluid rounded" />
                </div>
            </div>
        </div>

    );
}

export default Contact;

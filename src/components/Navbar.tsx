import { GlobeIcon } from "@/assets/images";
import { Route } from "next";
import Link from "next/link";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useOpenCloseModal } from "../hooks";
import LandlordStepper from "../landlordStepper/LandlordStepper";
import Button from "./Button";
import CModal from "./CModal";

interface Props {
  styles?: any;
}
function Header(props: Props) {
  const { closeModal, isOpen, openModal } = useOpenCloseModal();
  const { styles } = props;
  const langDropDown = () => {
    return (<div className="d-flex align-items-center gap-1">
      <GlobeIcon />
      <NavDropdown
        className="fw_600 main_nav_link"
        title="English"
        id="collapsible-nav-dropdown"
      >
        <NavDropdown.Item className="main_nav_link" href="">
          English
        </NavDropdown.Item>
        <NavDropdown.Item className="main_nav_link" href="">
          French
        </NavDropdown.Item>
        <NavDropdown.Item className="main_nav_link" href="">
          German
        </NavDropdown.Item>
      </NavDropdown>
    </div>)
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-top"
      style={{
        ...(styles
          ? styles
          : { backgroundColor: "#D1DBFF", paddingTop: "1.3rem" }),
      }}
    >
      <Container>
        <Navbar.Text className="h5 fw-bold main_nav_link">
          <Link href={"/"} className="text-decoration-none">
            MyHousing
          </Link>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="align-items-center nav_container">
            {/* <Link className="fw_600 main_nav_link" href={"/listPage" as Route}>
              Rent
            </Link> */}
            <Link className="fw_600 main_nav_link" href={"/aboutus" as Route}>
              About us
            </Link>
            {/* <Nav.Link className="fw_600 main_nav_link" href="">
              Blog
            </Nav.Link>
            <Nav.Link className="fw_600 main_nav_link" href="">
              Get in touch
            </Nav.Link> */}
            <Button
              btnLabel="Become a landlord"
              onClick={openModal}
              classes="btn-dark"
            />
            {langDropDown()}
          </Nav>
        </Navbar.Collapse>
        <CModal
          showModal={isOpen}
          closeModal={closeModal}
          langDropDown={langDropDown()}
          title="Become a Landlord"
          // eslint-disable-next-line react/no-children-prop
          children={<LandlordStepper closeLandlordModal={closeModal} />}
          showFooter={false}
        />
      </Container>
    </Navbar>
  );
}

export default Header;

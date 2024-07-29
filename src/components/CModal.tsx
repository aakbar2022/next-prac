import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  showFooter: boolean;
  title?: string;
  langDropDown?: any
}

const CModal = ({
  showModal,
  closeModal,
  children,
  title,
  showFooter,
  langDropDown
}: ModalProps) => {

  useEffect(() => {
    let elem = document.getElementsByClassName("modal-content")[0];
    if (elem) {
      elem.classList.add('container');
    }
  }, [showModal]);

  return (
    <Modal
      className="fade custom_modal"
      backdrop="static"
      keyboard={false}
      show={showModal}
      onHide={closeModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal_header " closeButton>
        <div className="d-flex justify-content-between w-100 px-5">
          {title && <Modal.Title>{title}</Modal.Title>}
          {langDropDown && langDropDown}
        </div>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>
      {showFooter && (
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      )}

    </Modal>
  );
};

export default CModal;

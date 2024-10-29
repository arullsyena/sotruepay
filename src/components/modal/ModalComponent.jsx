import React, { useEffect } from "react";
import "./ModalComponent.css";
import { Receipt } from "@mui/icons-material";
import ReceiptComponent from "../receipt/ReceiptComponent";

const ModalComponent = ({ isOpen, onClose, children }) => {
  // Close the modal when the Escape key is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Render nothing if the modal is not open
  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div id='modal-content' onClick={(e) => e.stopPropagation()}>
        {children}
        <button className='modal-close-button' onClick={onClose}>
          Close
        </button>
      </div>
      {/* <button onClick={openModal}>Open Modal</button> */}
    </div>
  );
};

export default ModalComponent;

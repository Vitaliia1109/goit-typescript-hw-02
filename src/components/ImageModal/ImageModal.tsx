import React from "react";
import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../App/App.types";

ReactModal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
  imageUrlLarge: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className={css.content}
      overlayClassName={css.overlay}
    >
      <img
        className={css.img}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </ReactModal>
  );
};

export default ImageModal;

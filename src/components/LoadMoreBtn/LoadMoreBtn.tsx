import css from "./LoadMoreBtn.module.css";
import React from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={onClick}>
        Load more!
      </button>
    </div>
  );
};

export default LoadMoreButton;

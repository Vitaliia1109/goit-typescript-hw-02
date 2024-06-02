import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallry.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id} onClick={() => onImageClick(item)}>
          <ImageCard urls={item.urls} description={item.description} />
        </li>
      ))}
    </ul>
  );
}

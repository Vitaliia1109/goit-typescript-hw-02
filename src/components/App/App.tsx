import { useEffect, useState } from "react";
import { fetchPhotos } from "../../assets/fetchPhotos";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "./App.types";

export default function App() {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedImageLarge, setSelectedImageLarge] = useState<string | null>(
    null
  );

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getPhotos(): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);
        const data: Image[] = await fetchPhotos(query, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPhotos();
  }, [page, query]);

  const openImageModal = (image: Image) => {
    setSelectedImage(image);
    setSelectedImageLarge(image.urls.regular);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedImageLarge(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {photos.length > 0 && (
        <ImageGallery
          items={photos}
          onImageClick={(item) => openImageModal(item)}
        />
      )}
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={true}
          onRequestClose={closeImageModal}
          image={selectedImage}
          imageUrlLarge={selectedImageLarge}
        />
      )}
    </div>
  );
}

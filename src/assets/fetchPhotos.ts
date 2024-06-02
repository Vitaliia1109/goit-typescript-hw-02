import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
export const fetchPhotos = async (searchQuery: string, currentPage: number) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "8MlimMhOJtACQH-Vco70jaqe4UB9TAkkXb7jKS37GT0",
      query: searchQuery,
      page: currentPage,
      per_page: 9,
      orientation: "landscape",
    },
  });
  return response.data.results;
};

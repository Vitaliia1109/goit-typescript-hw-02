import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 15,
      client_id: "8MlimMhOJtACQH-Vco70jaqe4UB9TAkkXb7jKS37GT0",
    },
  });
  return response.data.results;
};

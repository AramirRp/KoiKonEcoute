import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "f39ed8f154d24326868b3b4adfdb7f49";
const redirectUri = "https://koi-kon-ecoute.vercel.app";
const scopes = ["user-library-read", "playlist-read-private", "user-library-modify"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };

  

  
  export default apiClient;
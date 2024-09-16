import axios from "axios";

const websiteAPI = axios.create({
    baseURL: "https://backend-project-northcoders.onrender.com/api",
  });

  export default function getArticleList() {
    return websiteAPI.get("/articles").then((response) => {
      return response.data;
    });
  }
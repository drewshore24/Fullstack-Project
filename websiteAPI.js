import axios from "axios";

const websiteAPI = axios.create({
    baseURL: "https://backend-project-northcoders.onrender.com/api",
  });

  export function getArticleList() {
    return websiteAPI.get("/articles").then((response) => {
      return response.data;
    });
  }
  export function getArticle(article_id) {
    return websiteAPI.get(`/articles/${article_id}`).then((response) => {
      return response.data.data;
    });
  }
  export function getComment(article_id){
    return websiteAPI.get(`/articles/${article_id}/comments`).then((response) => {
      return response.data.data
    })
  }
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

  export function patchVote(vote, article_id){
    return websiteAPI.patch(`/articles/${article_id}`, { inc_votes: vote }).then((response) => {
      return response.data.data
    })
  }

  export function postComment(article_id, userName, newComment){
    return websiteAPI.post(`/articles/${article_id}/comments`, 
      { 
        username : userName, 
        body: newComment
       })
      .then((response) => {
      // console.log(response, 'r')
      // console.log(response.data.comment, 'rc')
      // console.log(typeof(response.data.comment), 'to')
      return response.data.comment
    })
  }
import { useState, useEffect } from "react";
import {getArticleList} from "../../websiteAPI";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { getArticlesByTopics } from "../../websiteAPI";
import TopicsDropDown from "./TopicsNavs.jsx";
import { useNavigate } from "react-router-dom"

const ArticleList = ({allArticles, setAllArticles, selectedTopic, setSelectedTopic}) => {

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);


  useEffect(() => {
    setLoading(true);
    setError(false);
    getArticleList()
      .then((response) => {
        setLoading(false);
        const articles = response.data;
        setAllArticles(articles);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);


  useEffect(() => {
    getArticlesByTopics(selectedTopic)
    .then((response) => {
      console.log(response)
    })
  },[selectedTopic])

  if (isLoading) {
    return (
      <>
        <img className="Loading" src="src/assets/loading-wheel.svg"></img>
        <p className="normalText">Hang tight</p>
        <p className="normalText">Things are happening...</p>
      </>
    );
  }


  if (isError) {
    console.log(isError);
    return (
      <>
        <img className="errorImage" src=""></img>
        <p className="normalText">Status: {isError.status}....Uh Oh</p>
      </>
    );
  }

  if(selectedTopic){

  }

  return (
    <section className="ArticleList">
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
      </nav>
      <h1>Articles</h1>
      <section>
        <TopicsDropDown selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
      </section>
      <section className="Map">
        {allArticles.map((article) => {
          return (
            <ArticleCard
            key={article.article_id}
            article={article}
          />
          );
        })}
      </section>
    </section>
  );
};


export default ArticleList;

import { useState, useEffect } from "react";
import {getArticleList} from "../../websiteAPI";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { getArticlesByTopics } from "../../websiteAPI";
import TopicsNav from "./TopicsNavs.jsx";
import { useSearchParams, useParams} from "react-router-dom"
import { getSortBy } from "../../websiteAPI";
import SortArticlesBy from "./SortArticlesBy.jsx";

const ArticleList = ({allArticles, setAllArticles, selectedTopic, setSelectedTopic}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [sortedArticles, setSortedArticles] = useState([])
  const sort_by = searchParams.get('sort_by');
  const order = searchParams.get('order');

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
    })
  },[selectedTopic])

  useEffect(() => {
    getSortBy(sort_by, order)
    .then((response)=> {
      setSortedArticles(response)
    })
  }, [sort_by, order])

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
  if(sortedArticles.length === 0){
    return (
      <section className="ArticleList">
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
        </nav>
        <h1>Articles</h1>
        <SortArticlesBy/>
        <section>
          <h2>Topics:</h2>
          <TopicsNav selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
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
  }


  return (
    <section className="ArticleList">
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
      </nav>
      <h1>Articles</h1>
      <SortArticlesBy/>
      <section>
        <h2>Topics:</h2>
        <TopicsNav selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
      </section>
      <section className="Map">
        {sortedArticles.map((article) => {
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

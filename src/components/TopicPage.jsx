import { useParams } from "react-router-dom"
import { getArticlesByTopics } from "../../websiteAPI";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function TopicPage(){
    const { topic } = useParams();
    const [topicList, setTopicList] = useState([])
    const capitalised = (topic.charAt(0).toUpperCase() + topic.slice(1))
    
    useEffect(()=> {
        getArticlesByTopics(topic)
        .then((articles)=> {
            console.log(articles, 'articles')
            setTopicList(articles)
        })
    },[])

    return (
        <section>
        <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/articles">
          Articles
        </Link>
       </nav>
       <h1>All Articles on {capitalised}</h1>
        <section className="Map">
        {topicList.map((article) => {
          return (
            <ArticleCard
            key={article.article_id}
            article={article}
          />
          );
        })}
      </section>
      </section>
    )
}


export default TopicPage
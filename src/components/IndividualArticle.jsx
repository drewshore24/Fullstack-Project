import { useState, useEffect } from "react";
import { getArticle, patchVote } from "../../websiteAPI";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GetAllComments from "./GetAllComments";
import ArticleCard from "./ArticleCard";
import { Routes, Route } from "react-router-dom";


const IndividualArticle = ({reqArticle, setReqArticle}) => {
  const { article_id } = useParams();
  // const [reqArticle, setReqArticle] = useState({});
  const [currVote, setCurrVote] = useState(0)
  const [voted, setVoted] = useState(false)


  useEffect(() => {
    getArticle(article_id).then((article) => {
      setReqArticle(article);
      setCurrVote(article.votes)
    });
  }, []);


  function handleVote(){
    setCurrVote((currVote) => currVote +1)
    setVoted(true)
    patchVote(1, article_id)
  }


  const newDate = new Date(reqArticle.created_at).toString()
  return (
    <section className="JustArticle">
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/articles">
          Articles
        </Link>
      </nav>
      <ArticleCard
            key={reqArticle.article_id}
            article={reqArticle}
            vote={currVote}
      />
      <button onClick={handleVote} disabled={voted}> Vote</button>
      <br/>
      <br/>
      <Link className="link" to={`/articles/${article_id}/comments`}>
          Get Comments
        </Link>
      {/* <GetAllComments reqArticle={reqArticle}/> */}
    </section>
  );
};


export default IndividualArticle;

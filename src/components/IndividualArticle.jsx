import { useState, useEffect } from "react";
import { getArticle } from "../../websiteAPI";
import { Link } from "react-router-dom";
import { getComment } from "../../websiteAPI";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import { all } from "axios";

const IndividualArticle = () => {
  const { article_id } = useParams();
  const [reqArticle, setReqArticle] = useState({});
  const [allComments, setAllComments] = useState([]);
  const [showComments, setShowComments] = useState(false)

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setReqArticle(article);
    });
  }, []);

  useEffect(() => {
    getComment(article_id).then((comment) => {
      setAllComments(comment);
    });
  }, [showComments]);

  function handleClick(){
    setShowComments(true)
  }

  function hideComments(){
    setShowComments(false)
  }

  if(showComments === true){
    return (
      <div className="JustArticle">
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/articles">
            Articles
          </Link>
        </nav>
        <h2>{reqArticle.title}</h2>
        <p>Topic: {reqArticle.topic}</p>
        <p>Author: {reqArticle.author}</p>
        <p>Created_at: {reqArticle.created_at}</p>
        <p>Votes: {reqArticle.votes}</p>
        <p>Comment count: {reqArticle.comment_count}</p>
        <img src={reqArticle.article_img_url} alt="image" />
        <button onClick={hideComments}> Hide Comments</button>
      <section className="Map">
        {allComments.map((comment) => {
          return (
            <CommentCard
            key={comment.comment_id}
            comment={comment}
          />
          );
        })}
      </section>
      </div>
    );
    
  }

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
      <h2>{reqArticle.title}</h2>
      <p>Topic: {reqArticle.topic}</p>
      <p>Author: {reqArticle.author}</p>
      <p>Created_at: {reqArticle.created_at}</p>
      <p>Votes: {reqArticle.votes}</p>
      <p>Comment count: {reqArticle.comment_count}</p>
      <img src={reqArticle.article_img_url} alt="image" />
      <button onClick={handleClick}>Comments</button>
    </section>
  );
};

export default IndividualArticle;

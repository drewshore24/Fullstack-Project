import { useState, useEffect } from "react";
import { getArticle, patchVote } from "../../websiteAPI";
import { Link } from "react-router-dom";
import { getComment } from "../../websiteAPI";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";


const IndividualArticle = () => {
  const { article_id } = useParams();
  const [reqArticle, setReqArticle] = useState({});
  const [allComments, setAllComments] = useState([]);
  const [showComments, setShowComments] = useState(false)
  const [currVote, setCurrVote] = useState(0)
  const [voted, setVoted] = useState(false)


  useEffect(() => {
    getArticle(article_id).then((article) => {
      setReqArticle(article);
      setCurrVote(article.votes)
    });
  }, []);


  useEffect(() => {
    getComment(article_id).then((comment) => {
      setAllComments(comment);
    });
  }, [showComments]);


  function handleClick(){
    setShowComments((currShowComments) => {return !currShowComments})
  }


  function handleVote(){
    setCurrVote((currVote) => currVote +1)
    setVoted(true)
    console.log(currVote)
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
      <h2>{reqArticle.title}</h2>
      <p>Topic: {reqArticle.topic}</p>
      <p>Author: {reqArticle.author}</p>
      <p>Body: {reqArticle.body}</p>
      <p>Created_at: {newDate}</p>
      <p>Comment count: {reqArticle.comment_count}</p>
      <img src={reqArticle.article_img_url} alt="image" />
      <p>Votes: {currVote}</p>
      <button onClick={handleVote} disabled={voted}> Vote</button>
      <br/>
      <br/>
      <button onClick={handleClick}>Comments</button>
      {showComments ?       <section className="Map">
        {allComments.map((comment) => {
          return (
            <CommentCard
            key={comment.comment_id}
            comment={comment}
          />
          );
        })}
      </section>: null}
    </section>
  );
};


export default IndividualArticle;

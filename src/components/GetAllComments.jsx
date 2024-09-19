import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getComment } from "../../websiteAPI";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import ArticleCard from "./ArticleCard";
import { getArticle } from "../../websiteAPI";
import NewComment from "./NewComment";

const GetAllComments = ({reqArticle, currVote, setReqArticle, username}) => {

    const { article_id } = useParams();
    const [allComments, setAllComments] = useState([]);
    const [showComments, setShowComments] = useState(false)

function handleClick(){
    setShowComments((currShowComments) => {return !currShowComments})
  }

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

return(
    <section>
            <ArticleCard
            key={reqArticle.article_id}
            article={reqArticle}
            vote={currVote}
      />
      <br/>
      <br/>
      <NewComment username={username}/>
      <br/>
      <br/>
    <button onClick={handleClick}> View Comments</button>
      {showComments ?       <section className="Map">
        {allComments.map((comment) => {
          return (
            <CommentCard
            username={username}
            key={comment.comment_id}
            comment={comment}
          />
          );
        })}
      </section>: null}
    </section>
)

}


export default GetAllComments
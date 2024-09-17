import { Link } from "react-router-dom";

const CommentCard = ({ comment}) => {
    return(
    <section className="CommentC">
    <p>Comment id: {comment.comment_id}</p>
    <p>Comment: {comment.body}</p>
    <p>Article_id: {comment.article_id}</p>
    <p>Author: {comment.author}</p>
    <p>Created_at: {comment.created_at}</p>
    <p>Votes: {comment.votes}</p>
    <p>created_at: {comment.created_at}</p>
    {/* <Link className="link" to={`/articles/${comment_id.article_id}`}>
        View Article
    </Link> */}
  </section> )
}

export default CommentCard;
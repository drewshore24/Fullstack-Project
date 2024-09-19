
import DeletedThisComment from "./DeletedThisComment";

const CommentCard = ({ username, comment}) => {
  const newDate = new Date(comment.created_at).toString()
    return(
    <section className="CommentC">
    <p>Comment id: {comment.comment_id}</p>
    <p>Comment: {comment.body}</p>
    <p>Article_id: {comment.article_id}</p>
    <p>Author: {comment.author}</p>
    <p>Created_at: {newDate}</p>
    <p>Votes: {comment.votes}</p>
    <DeletedThisComment username={username} comment={comment}/>
  </section> )
}

export default CommentCard;
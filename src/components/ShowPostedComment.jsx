

const ShowPostedComment = ({ commentResponse}) => {
  const newDate = new Date(commentResponse.created_at).toString()
    return(
    <section className="CommentC">
    <h2>Your New Comment!</h2>
    <p>Comment id: {commentResponse.comment_id}</p>
    <p>Comment: {commentResponse.body}</p>
    <p>Article_id: {commentResponse.article_id}</p>
    <p>Author: {commentResponse.author}</p>
    <p>Created_at: {newDate}</p>
    <p>Votes: {commentResponse.votes}</p>
  </section> )
}

export default ShowPostedComment;
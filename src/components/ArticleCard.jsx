import { Link } from "react-router-dom";

const ArticleCard = ({ article, vote}) => {
  const newDate = new Date(article.created_at).toString()
    return(
    <section className="Article">
    {(article.article_id) ? <p>Article id: {article.article_id}</p> : null}
    <p>Title: {article.title}</p>
    <p>Topic: {article.topic}</p>
    <p>Author: {article.author}</p>
    <p>Created_at: {newDate}</p>
    <p>Votes: {(vote) ? vote : article.votes}</p>
    <p>Comment count: {article.comment_count}</p>
    <img src={article.article_img_url} alt="image" />
    {(article.article_id) ? <Link className="link" to={`/articles/${article.article_id}`}>
        View Article
    </Link> : null}
  </section> )
}

export default ArticleCard;
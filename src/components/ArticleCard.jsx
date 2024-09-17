import { Link } from "react-router-dom";

const ArticleCard = ({ article}) => {
    return(
    <section className="Article">
    <p>Article id: {article.article_id}</p>
    <p>Title: {article.title}</p>
    <p>Topic: {article.topic}</p>
    <p>Author: {article.author}</p>
    <p>Created_at: {article.created_at}</p>
    <p>Votes: {article.votes}</p>
    <p>Comment count: {article.comment_count}</p>
    <img src={article.article_img_url} alt="image" />
    <Link className="link" to={`/articles/${article.article_id}`}>
        View Article
    </Link>
  </section> )
}

export default ArticleCard;
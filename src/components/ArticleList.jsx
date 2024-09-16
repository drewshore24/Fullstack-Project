import { useState, useEffect } from "react";
import getArticleList from"../../websiteAPI";
import { Link } from "react-router-dom";

const ArticleList = () => {
    const [allArticles, setAllArticles] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
    getArticleList().then((response) => {
        setLoading(true)
        const articles = response.data
        setAllArticles(articles)
    })
    .catch((err) => {
        setLoading(false)
        setError(err)
    })
    },[])
    if(isLoading) {
        return <>
        <img className="Loading" src="src/assets/loading-wheel.svg"></img>
        <p className='normalText'>Hang tight</p>
        <p className='normalText'>Things are happening...</p>
        </>
    }

    if(isError) {
        console.log(isError)
        return <>
        <img className="errorImage" src=""></img>
        <p className='normalText'>Status: {isError.status}....Uh Oh</p>
        </>
    }
    return (
        <section className="ArticleList">
        <h1>Articles</h1>
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
        </nav>
        <section className='Map'>
        {allArticles.map((article) => {
            return(
            <section className="Article" key={article.article_id}>
                <p>Article id: {article.article_id}</p>
                <p>Title: {article.title}</p>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>Created_at: {article.created_at}</p>
                <p>Votes: {article.votes}</p>
                <p>Comment count: {article.comment_count}</p>
                <img src={article.article_img_url} alt='image'/>
        </section>
            )
        })}
        </section>
        </section>
    )
    
}



export default ArticleList


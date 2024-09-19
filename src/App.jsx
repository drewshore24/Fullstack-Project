import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import ArticleList from './components/ArticleList';
import IndividualArticle from './components/IndividualArticle';
import GetAllComments from './components/GetAllComments'

function App() {
  const [allArticles, setAllArticles] = useState([])
  const [reqArticle, setReqArticle] = useState({});
  const [currVote, setCurrVote] = useState(0)
  const [username, setUsername] = useState('tickle122')

  return (
    <div className='App'>
      <Routes>
        <Route
        path='/'
        element={<Home username={username}/>}
        />
        <Route 
        path="/articles"
        element ={<ArticleList allArticles={allArticles} setAllArticles={setAllArticles}/>}
        />
        <Route
        path="/articles/:article_id"
        element = {<IndividualArticle reqArticle={reqArticle} setReqArticle={setReqArticle} currVote={currVote} setCurrVote={setCurrVote}/>}
        />
        <Route
        path='/articles/:article_id/comments'
        element = {<GetAllComments reqArticle={reqArticle} setReqArticle={setReqArticle} currVote={currVote} username={username}/>}
        />
      </Routes>
    </div>
  )
}

export default App

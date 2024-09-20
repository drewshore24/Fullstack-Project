import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import ArticleList from './components/ArticleList';
import IndividualArticle from './components/IndividualArticle';
import GetAllComments from './components/GetAllComments'
import TopicPage from './components/TopicPage';
import Error from './components/Error';

function App() {
  const [allArticles, setAllArticles] = useState([])
  const [reqArticle, setReqArticle] = useState({});
  const [currVote, setCurrVote] = useState(0)
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [username, setUsername] = useState('tickle122')
  const [error, setError] = useState(null)

  return (
    <div className='App'>
      <Routes>
        <Route
        path='/'
        element={<Home username={username}/>}
        />
        <Route 
        path="/articles"
        element ={<ArticleList allArticles={allArticles} setAllArticles={setAllArticles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>}
        />
        <Route
        path="/articles/:article_id"
        element = {<IndividualArticle reqArticle={reqArticle} setReqArticle={setReqArticle} currVote={currVote} setCurrVote={setCurrVote}/>}
        />
        <Route
        path='/articles/:article_id/comments'
        element = {<GetAllComments reqArticle={reqArticle} setReqArticle={setReqArticle} currVote={currVote} username={username}/>}
        />
                <Route
        path='/articles/topic/:topic'
        element = {<TopicPage selectedTopic={selectedTopic} />}
        />
        <Route path="*" element={<Error error={error}/>}/>
      </Routes>
    </div>
  )
}

export default App

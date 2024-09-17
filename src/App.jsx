import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import ArticleList from './components/ArticleList';
import IndividualArticle from './components/IndividualArticle';

function App() {
  const [allArticles, setAllArticles] = useState([])


  return (
    <div className='App'>
      <Routes>
        <Route
        path='/'
        element={<Home/>}
        />
        <Route 
        path="/articles"
        element ={<ArticleList allArticles={allArticles} setAllArticles={setAllArticles}/>}
        />
        <Route
        path="/articles/:article_id"
        element = {<IndividualArticle/>}
        />
      </Routes>
    </div>
  )
}

export default App

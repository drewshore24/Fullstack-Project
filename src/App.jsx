import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import ArticleList from './components/ArticleList';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route
        path='/'
        element={<Home/>}>
        </Route>
        <Route 
        path="/articles"
        element ={<ArticleList/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App

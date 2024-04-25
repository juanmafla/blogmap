import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './modules/header/header'
import Footer from './modules/footer/footer'
import HomePage from './modules/home/home'
import InvestigationsPage from './modules/investigations/investigations'
import ArticlePage from './modules/article/article'

import './App.css';

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="investigations" element={<Investigations />} />
          <Route path="article" element={<Article />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

function Home() {
  return (
    <HomePage></HomePage>
  );
}

function Investigations() {
  return (
    <InvestigationsPage></InvestigationsPage>
  );
}

function Article() {
  return (
    <ArticlePage></ArticlePage>
  );
}

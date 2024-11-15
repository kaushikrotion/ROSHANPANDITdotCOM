import "./App.scss"
import React ,{ Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage/Homepage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contacts from "./pages/Contacts/Contacts";
import GenreTemplate from "./components/portfolioGenraTemplate/genreTemplate";

const App = () => {
  return <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/portfolio/:genre" element = {<GenreTemplate />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </Suspense>
  </div>;
};

export default App;

import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Search from './components/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import View_story from './components/view_story/View_story';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app-container">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/viewstory" element={<View_story/>}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>

    </div>
  );
};

export default App;

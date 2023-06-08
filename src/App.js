import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Search } from './pages/Search';
import { Liked } from './pages/Liked';

function App () {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="Search" element={<Search/>} />
                <Route path="Liked" element={<Liked/>} />
            </Routes>
        </HashRouter>
    );
}
    

export default App;
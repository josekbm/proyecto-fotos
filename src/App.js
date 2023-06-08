import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Search } from './pages/Search';
import { Liked } from './pages/Liked';

function App () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="Search" element={<Search/>} />
                <Route path="Liked" element={<Liked/>} />
            </Routes>
        </BrowserRouter>
    );
}
    

export default App;
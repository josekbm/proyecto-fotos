import React from 'react';
import '../App.css';
import { TopBar } from '../components/TopBar';

export function Homepage() {
  return (
    <div className="App">
      <TopBar />
      <body className="App-body">
        <p>Welcome to the PHOTO DASH aplication.<br></br>
        Search among our almost 5 million photos library of our creators from all over the world. Save them in your favorites and download them for personal and comercial use.</p>
      </body>
    </div>
  );
}


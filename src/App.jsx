import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from "./Appbar";
import Signup from './Signup';
import Chat from './Chat';
import "./app.css"

function App() {
  return (
    <Router>
      <div className='background'>
        <Appbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
  
    </Router>
  );
}

export default App;

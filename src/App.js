import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home and Navber/Home'
import About from './Home and Navber/About'
import NotFound from './Home and Navber/NotFound'



import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="Contect" element={<Contect />} />
        <Route path="Services" element={<Services />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import  all routes here
import { Suggestion } from './components/Suggestions/Suggestion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/suggestion" element={<Suggestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

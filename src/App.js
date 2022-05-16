import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import  all routes here
import { Suggestion } from './components/Suggestions/Suggestion';
import { NavBar } from './components/Navbar/NavBar';

// 3rd party
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<div>Home page</div>} />
                    <Route path="/suggestion" element={<Suggestion />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

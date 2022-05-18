import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Routes
import { Home } from './views/Home';
import { AllPlaces } from './views/AllPlaces';
import { Suggestion } from './components/Suggestions/Suggestion';

// project imports
import { NavBar } from './components/Navbar/NavBar';

// 3rd party
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    const [selectedCity, setSelectedCity] = useState('');
    return (
        <div className="App">
            <ToastContainer />
            <Router>
                <NavBar
                    setSelectedCity={setSelectedCity}
                    selectedCity={selectedCity}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path={`/places/${selectedCity}`}
                        element={
                            <AllPlaces
                                setSelectedCity={setSelectedCity}
                                selectedCity={selectedCity}
                            />
                        }
                    />
                    <Route path="/suggestion" element={<Suggestion />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

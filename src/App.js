import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Routes
import { Home } from './views/Home';
import { AllPlaces } from './views/AllPlaces';
import { Detail } from './views/Detail';
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
    const [selectedPlace, setSelectedPlace] = useState('');

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
                        path={`/places/city/${selectedCity}`}
                        element={
                            <AllPlaces
                                setSelectedCity={setSelectedCity}
                                selectedCity={selectedCity}
                                setSelectedPlace={setSelectedPlace}
                            />
                        }
                    />
                    <Route path="/suggestion" element={<Suggestion />} />
                    <Route
                        path={'/places/place'}
                        element={
                            <Detail
                                place={selectedPlace}
                                setSelectedPlace={setSelectedPlace}
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

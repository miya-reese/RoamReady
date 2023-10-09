import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
//import MyApp from './MyApp';
import ScratchForm from './Component/ScratchForm';
import Layout from './Component/Layout';
import NoPage from './Component/NoPage';
import Welcome from './Component/Welcome';
//import Header from './Component/Header';
import Card from './Component/Card';
import MyTrips from './Component/MyTrips'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="Welcome" element={<Welcome />} />
                    <Route path="ScratchForm" element={<ScratchForm />} />
                    <Route path="Card" element={<Card />} />
                    <Route path="*" element={<NoPage />}/>
                    <Route path="MyTrips" element={<MyTrips />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

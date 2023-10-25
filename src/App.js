import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScratchForm from './Components/ScratchForm';
import Layout from './Components/Layout';
import NoPage from './Components/NoPage';
import Welcome from './Components/Welcome';
import Card from './Components/Card';
import MyTrips from './Components/MyTrips';
import SingleTrip from './Components/SingleTrip';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Welcome />} />
                    <Route path="Welcome" element={<Welcome />} />
                    <Route path="ScratchForm" element={<ScratchForm />} />
                    <Route path="Card" element={<Card />} />
                    <Route path="MyTrips" element={<MyTrips />} />
                    <Route path="SingleTrip" element={<SingleTrip />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScratchForm from './ScratchForm';
import Layout from './Layout';
import NoPage from './NoPage';
import Welcome from './Welcome';
import Card from './Card';
import MyTrips from './MyTrips';
import SingleTrip from './SingleTrip';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Welcome />} />
                    <Route path="Welcome" element={<Welcome />} />
                    <Route path="ScratchForm" element={<ScratchForm />} />
                    <Route path="Card" element={<Card />} />
                    <Route path="*" element={<NoPage />}/>
                    <Route path="MyTrips" element={<MyTrips />}/>
                    <Route path="SingleTrip" element={<SingleTrip />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout';
import NoPage from './NoPage';
import Welcome from './Welcome';
import Card from './Card';
import MyTrips from './MyTrips';
import SingleTrip from './SingleTrip';
import FormScreen from './FormScreen';
import Login from './Login.js';
import Register from './Register.js';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                          <Route index element={<Welcome />} />
                          <Route path="Welcome" element={<Welcome />} />
                          <Route path="FormScreen" element={<FormScreen />} />
                          <Route path="Card" element={<Card />} />
                          <Route path="MyTrips" element={<MyTrips />}>
                            <Route index element={<NoPage />} />
                            <Route path="SingleTrip" element={<SingleTrip />} />
                          </Route>
                          <Route path="Register" element={<Register />} />
                          <Route path="Login" element={<Login />} />
                        </Route>
            </Routes>
        </BrowserRouter>
    );
}

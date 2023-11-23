import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout';
import NoPage from './NoPage';
import Welcome from './Welcome';
import Card from './Card';
import MyTrips from './MyTrips';
import SingleTrip from './SingleTrip';
import FormScreen from './FormScreen';
import ManageProfile from './ManageProfile';
import AboutUsPage from './AboutUs';
import AddItemFormScreen from './AddItem/AddItemFormScreen';
import Login from './Login.js';
import Register from './Register.js';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    // public
                    <Route path="Welcome" element={<Welcome />} />
                    <Route path="Register" element={<Register />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="*" element={<NoPage />}/>
                    <Route path="AboutUs" element={<AboutUsPage />}/>

                    // protected
                    <Route path="FormScreen" element={<FormScreen />} />
                    <Route path="Profile" element={<Card />} />
                    <Route path="Profile/ManageProfile" element={<ManageProfile/>}/>
                    <Route path="MyTrips" element={<MyTrips />}/>
                    <Route path="MyTrips/SingleTrip" element={<SingleTrip />}/>
                    <Route path="MyTrips/SingleTrip/AddItem" element={<AddItemFormScreen/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}
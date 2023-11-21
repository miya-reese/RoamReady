import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AuthProvider>
		<App />
	</AuthProvider>
);

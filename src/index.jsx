import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom"
import { AppState } from "./AppState"

ReactDOM.render(
    <AppState>
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>
    </AppState>,
    document.getElementById('root')
);
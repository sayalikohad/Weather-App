import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './views/WeatherApp/Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container'>
    <Weather />
    </div>
);


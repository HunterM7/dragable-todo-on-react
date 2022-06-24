import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);


// Correct viewport height
const resizeViewPort = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};
// First run for render correct vh
resizeViewPort();
// Adding listener for resize window
window.addEventListener('resize', resizeViewPort);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let root
const mount = (el) => {
    if (!root) {
        root = ReactDOM.createRoot(el);
    }

    root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}

// We do this in case we want to run this project in conjunction with another project that depends on this one
// But we also want to test our changes directly within this project. See, the mount function will always be called when
// this file is imported.
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#hello-react')
    if (devRoot) {
        mount(devRoot)
    }
}

export {mount}
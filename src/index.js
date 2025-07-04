import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { AuthContextProvider } from "./Components/Context/AuthContext";


const root = createRoot(document.getElementById('root'));

root.render(<AuthContextProvider>
    <App />
</AuthContextProvider>);
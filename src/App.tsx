import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                <Login/>

            </header>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Registration/>
                <Login/>
            </header>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { PasswordReset } from './components/PasswordReset/PasswordReset'
import { NewPassword } from './components/NewPassword/NewPassword'


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <NewPassword />

            </header>
        </div>
    );
}

export default App;

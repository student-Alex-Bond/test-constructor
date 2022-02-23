import './App.css';

import Header from "./components/Header/Header";
import ItSelfTest from './components/ItSelfTest/ItSelfTest';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <ItSelfTest />

            </header>
        </div>
    );
}

export default App;

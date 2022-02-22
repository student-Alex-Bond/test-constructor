import './App.css';

import Header from "./components/Header/Header";
import { MyTests } from './components/MyTests/MyTests';
import { PassedTests } from './components/PassedTests/PassedTests';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <MyTests />
                <PassedTests />

            </header>
        </div>
    );
}

export default App;

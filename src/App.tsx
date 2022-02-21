import './App.css';

import Header from "./components/Header/Header";
import { MyTests } from './components/MyTests/MyTests';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
                <MyTests />

            </header>
        </div>
    );
}

export default App;

 import './styles/App.css';
import '../components/NavigationBar/NavigationBar';
 import NavigationBar from "../components/NavigationBar/NavigationBar";


function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationBar />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default HomePage;

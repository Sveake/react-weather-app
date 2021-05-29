import './App.css';
import Weather from './weather.js';


function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="App-header">
        <Weather />
      </div>
      <footer>
        Check out my <a href="https://github.com/Sveake/react-weather-app" target="_blank" rel="noreferrer">Github repository </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

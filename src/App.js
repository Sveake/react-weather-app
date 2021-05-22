import './App.css';
import Weather from './weather.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <p>Check out my <a href="https://github.com/Sveake/react-weather-app" target="_blank" rel="noreferrer">Github repository </a></p>
       
      </header>
    </div>
  );
}

export default App;

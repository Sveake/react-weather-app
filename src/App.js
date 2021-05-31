import './App.css';
import Weather from './weather.js';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Weather Window
        </h1>
        <Weather defaultCity="Tallinn" />



        
      
      </div>
      <footer className="footer">
        Check out my <a href="https://github.com/Sveake/react-weather-app" target="_blank" rel="noreferrer">Github repository </a>
        </footer>
    </div>
  );
}

export default App;

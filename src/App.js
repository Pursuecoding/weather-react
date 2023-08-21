import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <Weather defaultCity="San Diego" />
        <p>
          This app was created by Oksana Yanko and it is{" "}
        <a
          className="App-link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced
        </a>
        </p>
      </header>
      </div>
    </div>
  );
}

export default App;

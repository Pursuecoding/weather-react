import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <Weather defaultCity="Gainesville" />
        <p>
          This app was created by {" "}
          <a
          className="App-link"
          href="https://oksana-yanko-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oksana Yanko.
        </a>
           {" "}It is{" "}
        <a
          className="App-link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
        {" "}and hosted on{" "}
        <a
          className="App-link"
          href="https://jocular-stroopwafel-aeaef2.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        </p>
      </header>
      </div>
    </div>
  );
}

export default App;

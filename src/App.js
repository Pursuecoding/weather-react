import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Weathter App</h1>
        <Weather />
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

import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary defaultKeyword="curiosity" />
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/mariaCalvario/dictionary-react"
              alt="GitHub repository"
              title="GitHub repository"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Open-source code
            </a>{" "}
            by Maria Calvário
          </small>
        </footer>
      </div>
    </div>
  );
}

import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary defaultKeyword="curiosity" />
        <footer className="App-footer">
          <small>Coded by Maria Calvário</small>
        </footer>
      </div>
    </div>
  );
}

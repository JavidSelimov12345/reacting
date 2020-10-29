import logo from './logo.svg';
import './App.css';
import './cavid.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          javid <code>kokk</code> and save to reload.
        </p>


        <p className="cavid">Bu mein yaratdigim klasdir</p>

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

export default App;

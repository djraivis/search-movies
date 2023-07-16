import logo from './logo.svg';
import './App.css';
// require('dotenv').config()
function App() {
  return (
    <div className="container">
      <div class="titlelogo">
        <h1 className="title">React Movie Search App</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;

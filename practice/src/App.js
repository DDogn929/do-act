import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link} from react-router-dom;
import Compomunt from './../../dogn-react/src/Compomunt';

function Page1 () {
  return (
    <div>
      <h1>여기는 1번 페이지입니다.</h1>
    </div>
  )
}

function Page2 () {
  return (
    <div>
      <h1>여기는 2번 페이지입니다.</h1>
    </div>
  )
}

function Page3 () {
  return (
    <div>
      <h1>여기는 3번 페이지입니다.</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <nav>
          <ul>
            <li><Link td='/Page1'>1번페이지로</Link></li>
            <li><Link td='/Page2'>2번페이지로</Link></li>
          </ul>
      </nav>

      <Router>
        <Route path='/page1' Compomunt={page1}></Route>
        <Route path='/page2' Compomunt={page2}></Route>
      </Router>
    </div>
  );
}

export default App;

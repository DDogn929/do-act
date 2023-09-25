import logo from './logo.svg';
import './App.css';
import './gomoku.css';
import LineContainner from './LineContainner.js';
import CellContainner from './CellContainner.js';

function App() {

  const 칸수 = 19;

  return (
    <div className="App">
        <body>
          <div className="board">
              <LineContainner></LineContainner>
              <CellContainner></CellContainner>
          </div>

      </body>
    </div>
  );
}

export default App;

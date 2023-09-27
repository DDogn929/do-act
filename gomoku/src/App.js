import logo from './logo.svg';
import './App.css';
import './gomoku.css';
import LineContainner from './LineContainner.js';
import CellContainner from './CellContainner.js';
import { useState } from 'react';

function App() {

  const 칸수 = 19;
  const [게임판,set게임판] = useState(initBoard());

  const [누구차례,set누구차례] =useState('black')

  function initBoard(){
    const board=[];
      for(let i=0; i < 칸수 ; i ++){
        board[i] =[];
      for(let j = 0; j < 칸수 ; j ++){
        board[i][j]=null;
      }
    }
    return board;
  }

  function handleDropStone(row,col,누구차례) {
    const 임시복사 = [...게임판]
    
    set게임판(임시복사);
    
    차례번경();
    
    임시복사[row][col] =누구차례;
  }

  function 차례변경() {
    if(누구차례 === 'black') {
      set누구차례('white')
    }else{
      set누구차례('black')
      }
  }
  

  return (
    <div className="App">
        <body>
          <button onClick={()=>{
            handleDropStone(2,4,'black')
          }}>테스트</button>
          <div className="board">
              <LineContainner 칸수={칸수}></LineContainner>
              <CellContainner 전달={게임판} 착수함수={handleDropStone}></CellContainner>
          </div>

      </body>
    </div>
  );
}

export default App;

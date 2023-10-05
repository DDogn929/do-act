import { useState } from 'react';
import './App.css';
import CellContainer from './CellContainner';
import LineContainer from './LineContainner';


function App() {

  const 칸수 = 19;
  const [게임판,set게임판] = useState(initBoard());
  const [누구차례,set누구차례] = useState('black');

  function initBoard(){
    const board = []
    for(let i = 0 ; i < 칸수 ; i ++) {
      board[i] = [];
      for(let j = 0 ; j < 칸수 ; j ++) {
        board[i][j] = null;
      }
    }
    return board;
  }

  function checkwin() {
    //가로승리//
    for(let row = 0 ; row < 칸수 ; row ++) {
      for(let col = 0 ; col <= 칸수 - 5 ; col ++) {

        let 여기서부터연속 = 0;

        for(let i = 0 ; i < 5 ; i ++) {
          if(게임판[row][col+i] === 누구차례){
            여기서부터연속++;
          } else {
            break;
          }
        }``
        
        if (여기서부터연속 === 5) {
          return true;
        }
      }
    }
    
    //세로승리//
    for(let row = 0 ; row < 칸수 - 5 ; row ++) {
      for(let col = 0 ; col <= 칸수 ; col ++) {

        let 여기서부터연속 = 0;

        for(let i = 0 ; i < 5 ; i ++) {
          if(게임판[row+i][col] === 누구차례){
            여기서부터연속++;
          } else {
            break;
          }
        }
        
        if (여기서부터연속 === 5) {
          return true;
        }
      }
    }

    //대각선승리//
    for(let row = 0 ; row < 칸수 - 5 ; row ++) {
      for(let col = 0 ; col <= 칸수 - 5 ; col ++) {

        let 여기서부터연속 = 0;

        for(let i = 0 ; i < 5 ; i ++) {
          if(게임판[row+i][col+i] === 누구차례){
            여기서부터연속++;
          } else {
            break;
          }
        }
        
        if (여기서부터연속 === 5) {
          return true;
        }
      }
    }

    //대각선승리//
    for(let row = 0 ; row < 칸수 - 5 ; row ++) {
      for(let col = 4 ; col <= 칸수 ; col ++) {

        let 여기서부터연속 = 0;

        for(let i = 0 ; i < 5 ; i ++) {
          if(게임판[row+i][col-i] === 누구차례){
            여기서부터연속++;
          } else {
            break;
          }
        }
        
        if (여기서부터연속 === 5) {
          return true;
        }
      }
    }

    return false;
  }

  function 차례변경() {
    if(누구차례 === 'black') {
      set누구차례('white');
    }else {
      set누구차례('black');
    }
  }

  function handleDropStone(row,col) {
    
    const 임시복사 = [...게임판];
    
    임시복사[row][col] = 누구차례;
    set게임판(임시복사);

    if(checkwin()) {
      alert(`${누구차례}의 승리입니다.`);
      return;
    }

    차례변경();
    
    console.log(게임판);
  }



  return (
    <div className="App">

      <div className="board">
        <LineContainer 칸수={칸수}></LineContainer>
        <CellContainer 전달={게임판} 착수함수={handleDropStone}></CellContainer>
       
      </div>
    </div>
  );
}

export default App;
import React from 'react'

export default function CellContainner(props) {
  
    // const borad = [];

    // for(let i = 0 ; i < props.전달 ; i++){
    //     const boradRow = [];
    //     for(let j = 0 ; j < props.전달 ; j++){
    //         boradRow.push(<div className="cell"></div>)
    //     }
    //     borad.push(<div className="row">{boradRow}</div>)
    // }

    return (
    <>
        {/* {borad} */}
        {props.전달.map((row,rowIndex)=>(
            <div className="row" key={rowIndex}>
                {row.map((cell,cellIndex)=>(
                    <div className="cell" key={cellIndex}onClick={()=>{props.착수함수(rowIndex,cellIndex,'white')}}>
                        {cell !== null ?<div className={`stone ${cell === 'black' ? 'black' : 'white'}`}>  
                        </div>:''}
                    </div>
                )
                )}
            </div>
        )
        
        
        
        )}
    </>
  )
}

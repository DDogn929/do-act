import React from 'react'

export default function LineContainner(props) {

    function makeGrid(size) {
        const tableInner =[];

        for(let i = 0 ; i < size ; i++) {

            const tableRow =[];

            for(let j = 0 ; j < size ; j++){
                tableRow.push(<td></td>);
            }
            
            tableInner.push(<tr>{tableRow}</tr>)
        }

        console.log(tableInner)
        return tableInner;
    }

  return (
    <table className="line-container">
        {makeGrid(props.칸수-1)}        
    </table>
  )
}

import React from 'react'

export default function MeatLove(props) {
    const style = {
      color : '#00B8FF',
      fontSize : '24px',
      fontWeight : 'bold'
    }
  return (
    <div style={style}>{props.고기종류}고기는 너무 {props.순서}번째로 맛있어</div>
  )
}

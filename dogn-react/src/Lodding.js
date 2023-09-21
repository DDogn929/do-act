import React from 'react'

export default function Lodding(props) {

    
    if(props.로딩확인) {
        return (
            <p>로딩중</p>
        )
    }else{
        return (
            <p>로딩완료</p>
        )
    }

}

import React from 'react'

export default function LoginCheck(props) {

    
    if(props.로그인확인) {
        return (
            <p>안녕하세요 회원님</p>
        )
    }else{
        return (
            <p>로그인을 해주세요</p>
        )
    }

}

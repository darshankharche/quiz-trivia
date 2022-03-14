import React from 'react'

export default function MainPage(props){
    return(
        <div className='main-page'>
            <h1>Quzzical</h1>
            <p>Lets check your general knowledge.. If you have it..🤣</p>
            <button onClick={props.handleClick} >Start Quiz</button>
        </div>
    )
}
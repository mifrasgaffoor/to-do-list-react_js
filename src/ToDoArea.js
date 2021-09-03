import React from 'react'

const ToDoArea = ({text ,onClick}) => {
    return (
        <>
         
            <li onClick={onClick}  >{text}</li>
        </>
    )
}

export default ToDoArea

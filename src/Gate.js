import React from 'react'

const Gate = ({isOpen}) => {
    return (
        <div>
           {isOpen ? (<b>open</b>) : (<h1>close</h1>)} 
        </div>
    )
}

export default Gate

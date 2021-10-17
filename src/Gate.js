import React from 'react'

const Gate = ({isOpen}) => {
    return (
        <div>
           {isOpen ? (<b>open</b>) : (<b>close</b>)} 
        </div>
    )
}

export default Gate

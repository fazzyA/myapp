import React from 'react'

const MediaCard = ({title, body, imageUrl}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={imageUrl} width={100} height={100}/>
            
        </div>
    )
}

export default MediaCard

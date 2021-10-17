import React from 'react'

const State = () => {
    let obj = {
        name:"faz"
    }

    let {name} = obj
    let name = obj.name
    return (
        <div>
            state comp
        </div>
    )
}

export default State

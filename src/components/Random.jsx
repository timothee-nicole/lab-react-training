import React from 'react'

const Random = (props) => {
    return (
        <div>
            Random value between {props.min} and {props.max} ={">"} {Math.floor(Math.random()*props.max ) + props.min }
        </div>
    )
}

export default Random
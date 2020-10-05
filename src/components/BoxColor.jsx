import React from 'react'

const BoxColor = (props) => {
    return (
        <div>
            <h2 style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>rgb{'('}{props.r}, {props.g}, {props.b}{')'}</h2>
        </div>
    )
}
export default BoxColor
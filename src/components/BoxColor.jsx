import React from 'react'

const BoxColor = (props) => {
    return (
        <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            <h2>rgb{'('}{props.r}, {props.g}, {props.b}{')'}</h2>
        </div>
    )
}
export default BoxColor
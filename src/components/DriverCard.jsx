import React from 'react'

const DriverCard = (props) => {
    return (
        <div>
            <img src={props.img} />
            <h2>{props.name}</h2>
            <p>
            {'★'.repeat(Math.round(props))}
            {'☆'.repeat(5 - Math.round(props))}
            </p>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}
export default DriverCard
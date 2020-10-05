import React from 'react'

const DriverCard = (props) => {
    return (
        <div>
            <img src={props.img} />
            <h2>{props.name}</h2>
           {(props) => {if (props.rating < 1) {
        return (<div>☆☆☆☆☆</div>)}
    else if (props.rating >=1 && props.rating < 1.5) {
        return (<div>★☆☆☆☆</div>)}
    else if (props.rating >=1.5 && props.rating < 2.5) {
        return (<div>★★☆☆☆</div>)}
    else if (props.rating >=2,5 && props.rating < 3.5) {
        return (<div>★★★☆☆</div>)}
    else if (props.rating >=3.5 && props.rating < 4.5) {
        return (<div>★★★★☆</div>)}
    else return (<div>★★★★★</div>)}}
               <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}
export default DriverCard
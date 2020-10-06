import React from 'react'

const Rating = (props) => {
    if (props.children < 1) {
        return (<div>☆☆☆☆☆</div>)}
    else if (props.children >=1 && props.children < 1.5) {
        return (<div>★☆☆☆☆</div>)}
    else if (props.children >=1.5 && props.children < 2.5) {
        return (<div>★★☆☆☆</div>)}
    else if (props.children >=2,5 && props.children < 3.5) {
        return (<div>★★★☆☆</div>)}
    else if (props.children >=3.5 && props.children < 4.5) {
        return (<div>★★★★☆</div>)}
        else return (<div>★★★★★</div>)
    // return(
    // <p>
    //     {'★'.repeat(Math.round(children))}
    //     {'☆'.repeat(5 - Math.round(children))}
    // </p>
    // )
}
export default Rating;
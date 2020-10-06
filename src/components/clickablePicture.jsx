import React, { Component } from 'react'


class clickablePicture extends Component {
    state= {
        img: this.props.img
    }

    displayImage = (props) => {
        console.log("You clicked it")
        console.log('Before',this.state.img)
        this.setState({
            img: this.props.imgClicked
        })
        console.log('after',this.state.img)

    }
    render() {
        return (
            <div>
               <img src={this.state.img} alt='' onClick={this.displayImage}/>
            </div>
        )
    }
}



export default clickablePicture
import React, { Component } from 'react'

class Carousel extends Component {

    state = {
        carousel: 1,
        prevButton: false,
        nextButton: false
    }

    startAgain = (i, arr) => {
        if (arr.length < i)
        return i = 0
    }

    incrementCarousel = () => {
        this.setState({
            carousel: this.state.carousel +1,
        })

    };


    decrementCarousel = () => {
        this.setState({
            carousel: this.state.carousel !== 0 ? this.state.carousel -1 : null
        })

    }


    render() {
        return (
            <div>
                <button onClick={this.decrementCarousel} >Previous</button>
                <img src={this.props.imgs[this.state.carousel]} alt=''/>
                <button onClick={this.incrementCarousel}>Next</button>
            </div>
        )
    }
}

export default Carousel
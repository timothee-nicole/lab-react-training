import React, { Component } from 'react'

class Dice extends Component {

    state = {
        dice: "/img/dice6.png"
    }

    shuffleDice = () => {
        let r = Math.floor(Math.random()*6)+1
        // console.log(r)
        this.setState({
            dice: "/img/dice-empty.png"
        })
        let diceInterval = setInterval(() => {
            this.setState({
                dice: `/img/dice${r}.png`
            })
            clearInterval(diceInterval)
        }, 1000)
    }

    render() {
        return (
            <div>
                <img src={this.state.dice} alt='' onClick={this.shuffleDice} />
            </div>
        )
    }
}


export default Dice
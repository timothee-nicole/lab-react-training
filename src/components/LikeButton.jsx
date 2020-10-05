// import React from 'react'



// const LikeButton = () => {
//     this.state = {
//         clicks: 0,
//         show: true
//       };
// function IncrementItem()  {
//   this.setState({ clicks: this.state.clicks + 1 });
//       }
//     return (
//         <div>
//           <button onClick= {this.IncrementItem}>{this.state.clicks} likes</button>
//         </div>
//     )
// }
// export default LikeButton

import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        clicks: 0,
              };

    incrementItem(evt) {
        this.setState({clicks: this.state.clicks + 1})
    }
    render() {
        return (
        <button onClick= {(evt) => this.incrementItem(evt)
        }>{this.state.clicks} like{this.state.clicks > 1 ? 's' : ''}</button>

        )
    }
}


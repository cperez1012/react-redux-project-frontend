// import React from 'react';
// // import React, { useState } from 'react';
// // import Button from 'react-bootstrap/esm/Button';

// class Upvote extends React.Component {

//     //we use the constructor to set the INITIAL STATE
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0,
//             addend: 0
//         }
//     }

//     increment = () => {

//         this.setState({
//             count: this.state.count + 1,
//             hasUpvoted: true
//         })
//     }

//     decrement = () => {

//         this.setState({
//             count: this.state.count - 1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={ this.state.hasVoted ? this.decrement : this.increment }>
//                     +
//                 </button>
//                 <span>{this.state.count}</span>
//                 <button onClick={this.decrement}>
//                     -
//                 </button>
//             </div>
//         );
//     }
// }

// export default Upvote;

// import React from 'react';

// class Upvote extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0,
//             addend: 0 // either 1, 0, or -1
//         }
//     }

//     toggleIncrement = () => {
//         this.setState(prevState => ({
//             addend: prevState.addend === 1 ? 0 : 1
//         }))
//     }

//     toggleDecrement = () => {

//         this.setState(prevState => ({
//             addend: prevState.addend === -1 ? 0 : -1
//         }))
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.toggleIncrement}>
//                     +
//                 </button>
//                 <span>{this.state.count + this.state.addend}</span>
//                 <button onClick={this.toggleDecrement}>
//                     -
//                 </button>
//             </div>
//         )
//     }
// }

// export default Upvote;

// Functional Component

import React, { useState } from 'react';

const Upvote = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <button onClick={increment} disabled={count === 1}>
                Upvote
            </button>
            <button  onClick={decrement} disabled={count === -1}>
                Downvote
            </button>
            <div>{count}</div>
        </div>
    )
}

export default Upvote;
import React from 'react'
import { buyBall } from './redux/balls/BallAction'
import {connect} from 'react-redux'

function BallContainer(props) {
    // console.log(props);
    return (
        <div>
            <h2>Number of Balls- {props.numofBalls}</h2>
            <button onClick={props.buyBall}>Buy Ball</button>
        </div>
    )
}

//first method for reading

const mapStateToProps = state=>{
    console.log(state);
    return {
        numofBalls:state.ball.numofBalls
    }
}

//second match to 

const mapDispatchToProps=dispatch=>{
    return {
        buyBall:()=>dispatch(buyBall())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BallContainer);

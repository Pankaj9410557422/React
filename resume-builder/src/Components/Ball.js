import React,{useState} from 'react';
import {connect} from 'react-redux';
//connect pulls state from store

function Ball(props) {
    // const [balls, setBalls] = useState(15);
    console.log(props);
    return (
        <div>
            <h1>Number of Balls {props.balls}</h1>
        <button 
        onClick={props.setBalls}
        >Buy Balls</button>
        </div>
    )
}

const mapStateToProps = store =>{
    console.log('in map state to prop' , store);
    return store;
}
const mapDispatchProps =dispatch =>{
    return {
        setBalls : ()=>{
            return dispatch({type:"buy_ball"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Ball);

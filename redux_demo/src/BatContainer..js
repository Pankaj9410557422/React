import React,{useState} from 'react'
import {buyBat,sellBat} from './redux/bats//BatAction';
import {connect} from 'react-redux'

function BatContainer(props) {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <h2>Number of Bats- {props.numofBats}</h2>
            <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
            <button onClick ={()=>props.buyBat(number)}>Buy {number} bats</button>
            <button onClick={()=>props.sellBat(number)}>Sell {number} bats</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        numofBats:state.bat.numofBats
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyBat: (number)=>dispatch(buyBat(number)),
        sellBat:(number)=>dispatch(sellBat(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BatContainer)

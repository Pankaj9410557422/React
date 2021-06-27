import React,{useState} from 'react'

function Demo() {
    //count ki state bnani h
    const [count,setCount] =useState(0);
    //name of state
    //function that will be used to change the state
    //initial value of your state 
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick = {handleIncrement}>+</button>
            <button onClick ={handleDecrement}>-</button>
        </div>
    )
}

export default Demo
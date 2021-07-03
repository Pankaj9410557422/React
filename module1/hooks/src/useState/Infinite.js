// import React, {useState} from 'react'

// function Uswo() {
//     const [msgObj,setMsgObj]=useState({message:''});
//     const handleChange =(e)=>{

//         // bellow to line m nya object nhi bnra to change hoga lekin 
//         //react detect nhi karega chaneg kyuki object ka address compare krta h or 
//         //hm mutate kr rhe h poorane object ko to address same rahega
//         // msgObj.message = e.target.value;
//         // setMsgObj(msgObj);

//         //right way to do-------------->>
//         let obj ={...msgObj}  //shallow copy
//         obj.message=e.target.value;
//         setMsgObj(obj);
//     }
//     return (
//         <div>
//             <input value={msgObj.message} onChange={handleChange} type='text' placeholder='Type a message'></input>
//             <p>{msgObj.message}</p>
//         </div>
//     )
// }

// export default Uswo
import React,{useState,useEffect} from 'react'

function Infinite() {
    const [count,setCount] = useState(0);
    useEffect(() => {
      console.log('useEffect');
      let num = Math.random()*100;
      setCount(num);
    })
    console.log('render');
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Infinite

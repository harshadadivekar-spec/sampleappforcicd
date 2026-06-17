import { useState } from "react"

export const Sample=()=>{
    const [count,setCounter]=useState(0);

    const Increment=()=>{
       var n= count;
        n++;
       setCounter(n);
    }
    return(
        <div style={{"margin":'2%'}}>
            <h2>Welcome to React App</h2>
            <h2>{count}</h2>
            <input type="button" value="Click" onClick={Increment}/>
        </div>
    )
}
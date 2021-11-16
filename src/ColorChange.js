import React, {useState} from "react";
import NameDisplay from "./NameDisplay";
export default function ColorChange(props) {
    const randomNum = Math.floor(Math.random()*10)+1

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("#ffffff")
   
    const clickHandle = ()=>{
      console.log("clicked")
      setCount(count +1)
      console.log(count)
    }
  
    const changeHandle = (e)=>{
     setColor(e.target.value)
    }
    return (
      <div style={{
        backgroundColor:color
      }}>
        <h1 className="bigText">Hello</h1>
        <h2>count {count}</h2>
       {props.names.map(name=><NameDisplay key={name} name={name}/>)}
       <h3>count: {count}</h3>
       <input type="color" onChange={changeHandle}/>
        <button onClick={clickHandle}>add one to count</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <hr/>
      </div>
    )
}

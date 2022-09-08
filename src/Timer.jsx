import React,{ useEffect, useState } from "react";
import './index.css'

function Timer(props){
    const [counter, setCounter] = useState(30);
    const [modal, setModal] = useState(false);
    const onTrigger = () => {
        props.parentCallback(true);
      };

    useEffect(() =>{
        if(counter > 0){
            setTimeout(()=>setCounter(counter - 1), 1000);
        }
        if(counter===0){
            setModal(true);
        }
    },[counter]);

    

    return(
        modal ?  (<div class="w-screen h-screen flex items-center justify-center bg-white">
        <p class="text-3xl">Try Again!</p>
        </div>)
    : 
    (<span class="text-3xl pt-4 pl-4">
    {counter}
    </span>)   
)}

export default Timer;
import React from "react";
import "./index.css";

export default function CustomInput(props) {    
    return(
        <div class="mb-4">
            <label 
            class="block text-gray-700 text-sm font-bold mb-2"
            for={props.id}>{props.name}</label>
            <input 
            class="shadow appearance-none border rounded border-3 border-indigo-500/100 w-full 
            py-2 px-3 pl-8 text-gray-700 leading-tight focus:border-red-500/50 focus:outline-none focus:shadow-outline"
            autoComplete="off"
            type={props.type} 
            id={props.id} 
            placeholder={props.ph}
            />
        </div>   
    ); 
}
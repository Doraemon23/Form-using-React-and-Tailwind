import React from "react";
import "./index.css";

export default function CustomDrop(props) {    
    return(
        <div>
            <label for={props.id} class="block text-gray-700 text-sm font-bold mb-2">
                    {props.label}
                </label>
                <select id={props.id}
                defaultValue={props.defaultValue}
                    class="shadow appearance-none border rounded border-3 border-indigo-500/100 focus:border-red-500/50
                    w-full py-2 pl-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option selected disabled hidden>{props.defaultValue}</option>
                    {props.options.map((option) => (
                        <option 
                        value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
        </div>
    );
}
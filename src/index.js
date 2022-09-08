import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CustomInput from "./CustomInput";
import CustomDrop from "./CustomDrop";
import Timer from "./Timer";

function App() {

    const [values, setValues] = useState({
        fullName: "",
        loanAmt: 0,
        reason: "Select reason",
    });

    const [modal, setModal] = useState(false);

    const handleCallback = (childData) => {
        setModal(childData)
    }

    const reas = [
        { value: 'vehicle', label: 'Vehicle' },
        { value: 'education', label: 'Education' },
        { value: 'housing', label: 'House' },
        { value: 'personal', label: 'Personal' },
    ]
    return (
        <div class="bg-cover bg-gradient-to-r from-cyan-500 to-blue-500">
            <div class="absolute justify-start flex items-start content-start">
                <Timer />
            </div>

            <div id="formContainer" class="w-screen h-screen flex justify-center items-center">

                <form class="flex-1 max-w-md bg-white shadow-md rounded px-8 pt-4 pb-6">

                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center text-gray-700 pt-7 pl-1 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>

                        <CustomInput
                            name='Full Name'
                            type='text'
                            id='name'
                            ph='Enter Name'
                            value={values.fullName}
                            onChange={e => setValues(e.target.value)}
                        />
                    </div>
                    <br />

                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center text-gray-700 pb-2.5 pl-1 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <CustomInput
                            class="ml-6 pl-6"
                            name='Loan Amount'
                            type='number'
                            id='loanAmt'
                            ph='Enter Loan Amount'
                            value={values.loanAmt}
                            onChange={e => setValues(e.target.value)}
                        />
                        <br />
                    </div>

                    <CustomDrop
                        id="reason"
                        label="Loan Reason"
                        options={reas}
                        defaultValue={values.reason}
                        onChange={e => setValues(e.target.value)}
                    />
                    <br />

                    <button type="submit" value="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
                    focus:outline-none focus:shadow-outline"
                    >Submit</button>

                </form>
            </div>
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

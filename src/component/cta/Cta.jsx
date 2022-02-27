import React, {useState} from 'react';
import './cta.css'
import {getAge} from './calculateAge'


export default function Cta() {
    const [input, setInput] = useState("")
    const [age, setAge] = useState("")
    const [started, setStarted] = useState(false)
    const getInput = (e) => {
        setInput(e.target.value);
        console.log(input, e.target.value);
    }
    const calcAge = (e) => {
        e.preventDefault();
        setStarted(true);
        setAge(getAge(input));
    }
    console.log(input);
    console.log(started);
    return (
        <div className="gpt3__cta">
            <div className="gpt3__cta-1">
                <div className="gpt3__cta-content">
                    <p>Request Early Access to Get Started</p>
                    <h3>Register today & start exploring the endless possiblities.</h3>
                </div>
                <div className="gpt3__cta-btn">
                    <button type="button">Get Started</button>
                </div>
            </div>
            <div className="gpt3__cta-2">
                <h2>Derive your age from date of birth easily</h2>
                <div className="gpt3__cta-getDOB">
                    <form onSubmit={calcAge}>
                        <input type="date" className="gpt3__cta-getDOB_txt" value={input} onChange={getInput}/>
                        <button type="submit" >Get Age!</button>
                    </form>
                </div>
                {started &&
                    <div className="gpt3__cta-displayAge">
                        {age
                            ? <p>Hello, you are {age} years old!</p> 
                            : <p>Hello, you are 0 years old!</p> 
                        }
                    </div>
                }
            </div>
        </div>
    )
}

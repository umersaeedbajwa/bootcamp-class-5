import React, {useReducer} from 'react';
import CounterReducer from './counterReducer.js';
import './App.css';



const Child2 = ()=>{
    let [state, dispatch] = useReducer(CounterReducer, 1);
    return(
        <div>
            <h1>This is 2<sup>nd</sup> Child and is working with reducer. </h1>
            <h3>Value of reducer:{state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment</button>
            <br></br>
            <button onClick={()=>dispatch('DECREMENT')}>Decrement</button>
            <button onClick={()=>dispatch('MULTIPLY 2')}>MULTIPLY 2</button>
            <br></br>
            <button onClick={()=>dispatch('DEFAULT')}>Set to Default</button>
             
        </div>
    )
}

export default Child2;
import React, { useContext } from 'react';
import CounterContext from './counterContext';


const Child = () => {
    let counterValue = useContext(CounterContext);
    return (
        <div>
            <h1>This is a cute child.</h1>
            <h1>The value in counterContext is:{counterValue[0]}</h1>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment</button>
        </div>
    )
}

export default Child;
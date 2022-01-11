import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [counterInc, setCounterInc] = useState(0)
    const [counterDec, setCounterDec] = useState(0)
   
    function increment(){
        setCounter((prevState) => prevState+1)
        setCounterInc(counterInc+1)
    }
    function decrement(){
        setCounter(counter-1)
        setCounterDec(counterDec+1)
    }

 


    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className='btn btn-success'>+</button>
            <button onClick={decrement} className='btn btn-danger'>-</button>
            <p>Вы нажали кнопку "+" {counterInc} раз</p>
            <p>Вы нажали кнопку "-" {counterDec} раз</p>
        </div>
    );
};

export default Counter;
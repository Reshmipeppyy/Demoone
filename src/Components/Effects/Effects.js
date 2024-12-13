import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const Effects = () => {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);

    useEffect(() => {
        console.log("side effects")
    },[]); 
    // You may want to run the effect whenever 'counter' changes.
    {/*useeEffect(() => {
        console.log("side effects");
    }, [counter]); // You may want to run the effect whenever 'counter' changes.*/}


    return (
        <div className='App'>
            <div>
            <h1>{counter}</h1>
            <Button onClick={() => { setCounter(counter + 1) }}>click</Button>
            <h1>{counter1}</h1>
            <Button onClick={() => { setCounter1(counter1 + 1) }}>click</Button>
            </div>
          
        </div>
    );
}

export default Effects;
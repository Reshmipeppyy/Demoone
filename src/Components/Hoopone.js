import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Hoopone = () => {
  const [color, setColor] = useState('Green');
 const[count,setcount]=useState(0);


  const changeColor = () => {
    setColor('Red');
  };
    const increment=()=>{setcount(count+1)};
    const decrement=()=>{setcount(count-1)};
    
  return (
    <div>
      <h1 className="bg-warning text-white">This color is {color}</h1>
      <Button onClick={changeColor}>My Button</Button>
      <br/>
      <br/>
      <h>count is{count}</h>
       <Button onClick= {increment} className='m-2  bg-success'>+</Button>
      <Button onClick= {decrement} className='m-2  bg-danger'>-</Button>
      </div>
  );
};

export default Hoopone;

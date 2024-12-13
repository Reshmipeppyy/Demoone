import React from 'react'
import {Button} from 'react-bootstrap';

const Events = () => {
    const clickone=() =>{console.log("clicking on button")};
    const dobleclick=() =>{alert("doubleclicking")};
    const onchange=() =>{alert("you typedonthe text fiels")};
    const onmouseover=() =>{alert("mouse over working")};
  return (
    <div>
        
      <h1 className="bg-success text-white">This is my Event</h1>
      <Button onClick={clickone}>ONCLICKbUTTON</Button>
      <h1 onDoubleClick={dobleclick}>clickonhere</h1>
      <input onChange={onchange} type="text" />
      <h1 onMouseOver={onmouseover}>clickmehereReshmi</h1>
    </div>
  );
};
export default Events

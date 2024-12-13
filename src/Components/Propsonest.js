import React from 'react';
const Propsonest = ({states}) => {
  return (
    <div>
    {states.map((state)=>(
    <div className='bg-warning'>
    <h1>Name:{state.name}</h1>
    <h1>Language:{state.language}</h1>
    <h1>Population:{state.population}</h1>
  </div>
    )
  )
}
  </div>
  );
};

export default Propsonest

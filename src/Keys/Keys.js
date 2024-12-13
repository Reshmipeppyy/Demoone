import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const products = [
  { id: 1, name: "Laptop", Brand: "Dell", Qty: 1 },
  { id: 2, name: "Laptop", Brand: "Lenovo", Qty: 1 },
  { id: 3, name: "Laptop", Brand: "HP", Qty: 1 }
];

const Keys = () => {
  const [items, setItems] = useState(products);

  const changeQty = (id) => {
    // Update the quantity of the specific product based on its id
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, Qty: item.Qty + 1 } : item
    );
    setItems(updatedItems); // Update the state with the new items array
  };

  return (
    <div className="App">
      {items.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <h2>Brand: {product.Brand}</h2>
          <h3>Qty: {product.Qty}</h3>
          <Button onClick={() => changeQty(product.id)}>Increase Quantity</Button>
        </div>
      ))}
    </div>
  );
};

export default Keys;

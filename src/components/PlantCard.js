import React, { useState } from "react";

function PlantCard({ id, plantName, plantPrice, plantImage="https://via.placeholder.com/400", updatePlantPrice, deletePlant }) {
  const [inStock, setInStock] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [newPrice, setNewPrice] = useState('');

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => deletePlant(id))
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "price": newPrice
      }),
    })
    .then(r => r.json())
    .then(updatedPlant => updatePlantPrice(updatedPlant))

    setNewPrice('');
    setClicked(false);
  }

  return (
    <li className="card" id={id}>
      <button onClick={handleDeleteClick}>X</button>
      <img src={plantImage} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p> 
      <button onClick={() => setClicked(!clicked)}>Edit Price</button>
      {clicked ? (
        <form onChange={(e) => setNewPrice(e.target.value)} onSubmit={handleEditSubmit}>
          <input type='number' name='price' step='.01' placeholder='Enter new price'></input>
        </form>
      ) : (
        null
      )}
      {inStock ? (
        <button className="primary" onClick={() => setInStock(!inStock)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
